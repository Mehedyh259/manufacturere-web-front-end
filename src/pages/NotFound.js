import React from 'react';
import { Link } from 'react-router-dom';
import not_found from '../../src/assets/images/404.jpg';

const NotFound = () => {
    return (
        <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <div className="text-center">
                <img src={not_found} className='h-[50vh]' alt="" />

                <Link to='/' className='btn btn-primary mt-5'>Take Me Home</Link>
            </div>

        </div>
    );
};

export default NotFound;