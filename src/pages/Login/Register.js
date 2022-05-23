import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';


const Register = () => {
    let errorMessage = "";
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            signOut(auth);
            navigate('/login');
        }
    }, [user, navigate])

    if (error || updateError) {
        errorMessage = <p className='p-2 text-center rounded-lg text-white bg-red-500'>{error?.message || updateError?.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    if (loading || updating) {
        return <Loading />
    }

    return (
        <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-accent">Sign Up</h2>
                    {/* error message show */}
                    {
                        errorMessage && errorMessage
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name input */}
                        <div className="form-control w-full max-w-md">
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
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* email input */}
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                        message: 'Valid Email is needed'
                                    }
                                }
                                )}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password input */}
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or longer"
                                    }
                                }
                                )}
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" value={'SIGN UP'} className='btn btn-accent text-white w-full max-w-md mt-3' />
                    </form>

                    <p className="text-center my-2">Already have an account? <Link to='/login' className='text-primary'>Please login</Link> </p>

                    <GoogleLogin />

                </div>
            </div>
        </div>
    );
};

export default Register;