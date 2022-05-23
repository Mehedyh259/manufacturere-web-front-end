import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-5">404 | Page Not Found</h2>
                <Link to='/' className='btn btn-primary'>Take Me Home</Link>
            </div>

        </div>
    );
};

export default NotFound;