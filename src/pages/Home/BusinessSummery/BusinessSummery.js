import React from 'react';
import './BusinessSummery.css'
import { FaMoneyCheckAlt, FaTools } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiMessageAltCheck } from 'react-icons/bi'






const BusinessSummery = () => {

    return (
        <div className='counter-section my-10'>
            <div className="container py-5">
                <h2 className="text-4xl text-primary font-bold text-center uppercase my-10">Millions of Business Trusts Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 counter-content mx-5 mb-10">

                    <div className="counter-box bg-base-100">
                        <div className="flex justify-center">
                            <i><HiOutlineUserGroup /></i>
                        </div>
                        <span className="counter text-3xl font-bold">
                            100+
                        </span>
                        <p className='text-lg'>Customers</p>
                    </div>
                    <div className="counter-box bg-base-100">
                        <div className="flex justify-center">
                            <i><FaMoneyCheckAlt /></i>
                        </div>
                        <span className="counter text-3xl font-bold">
                            120M+
                        </span>
                        <p className='text-lg'>Annual revenue</p>
                    </div>
                    <div className="counter-box bg-base-100">
                        <div className="flex justify-center">
                            <i><BiMessageAltCheck /></i>
                        </div>
                        <span className="counter text-3xl font-bold">
                            33K+
                        </span>
                        <p className='text-lg'>Reviews</p>
                    </div>
                    <div className="counter-box bg-base-100">
                        <div className="flex justify-center">
                            <i><FaTools /></i>
                        </div>
                        <span className="counter text-3xl font-bold">
                            50+
                        </span>
                        <p className='text-lg'> tools</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;