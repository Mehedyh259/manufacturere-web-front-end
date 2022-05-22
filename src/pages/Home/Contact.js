import React from 'react';

const Contact = () => {
    return (
        <div class=" py-12 bg-base-200">
            <div class=" p-16 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div class="flex justify-start items-center">
                    <div>
                        <h1 class="text-5xl font-bold">Contact us</h1>
                        <p class="py-6">We wanted to provide you with feedback on our service. We are the best company in the entire world at providing services.</p>
                    </div>
                </div>
                <div class="card w-full shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea placeholder="message.." rows={5} class="input input-bordered">

                            </textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;