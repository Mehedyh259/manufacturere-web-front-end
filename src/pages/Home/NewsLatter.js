import React from 'react';

const NewsLatter = () => {
    return (
        <div className='p-16 my-12 bg-base-200 rounded-xl flex justify-center items-center'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-2'>Subscribe To Our Newsletter</h2>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg my-1" />
                <button className="btn btn-primary mt-2" type="button">Submit Newsletter</button>
            </div>
        </div>
    );
};

export default NewsLatter;