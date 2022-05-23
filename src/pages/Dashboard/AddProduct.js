import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import fetchApi from '../../interceptor';


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_UPLOAD_KEY}`;
        const { data: result } = await axios.post(url, formData);
        if (result) {
            const imageUrl = result.data.url;
            const product = {
                name: data.name,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                minimumOrder: data.minimumOrder,
                image: imageUrl
            }

            const { data: response } = await fetchApi.post('/product', product);
            if (response.insertedId) {
                toast.success('product uploaded successfully')
            } else {
                toast.error('something error happend')
            }
            reset();
        }

    }


    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                    }
                                    )}
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Descripton</span>
                                </label>
                                <input
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        },
                                    }
                                    )}
                                    type="text"
                                    placeholder="Product Description"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        },
                                    }
                                    )}
                                    type="number"
                                    placeholder="Product Price"
                                    min={1}
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantty</span>
                                </label>
                                <input
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'quantity is Required'
                                        },
                                    }
                                    )}
                                    type="number"
                                    placeholder="Product quantity"
                                    min={1000}
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    {...register("minimumOrder", {
                                        required: {
                                            value: true,
                                            message: 'minimumOrder is Required'
                                        },
                                    }
                                    )}
                                    type="number"
                                    placeholder=" minimum Order quantity"
                                    min={50}
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        },

                                    }
                                    )}
                                    type="file"
                                    placeholder="Image"
                                    className=" input input-bordered "
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;