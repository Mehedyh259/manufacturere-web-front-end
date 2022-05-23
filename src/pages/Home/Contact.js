import React from 'react';

const Contact = () => {
    return (
        <div className=" py-12 bg-base-200 rounded-lg my-12">
            <div className="p-5 lg:p-16 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex justify-start items-center">
                    <div>
                        <h1 className="text-5xl font-bold">Contact us</h1>
                        <p className="py-6">We wanted to provide you with feedback on our service. We are the best company in the entire world at providing services.</p>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="message.." rows={5} className="input input-bordered">

                            </textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;