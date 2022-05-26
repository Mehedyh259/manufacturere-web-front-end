import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import Review from './Review';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', async () => await axios.get('https://manufacture-web-1542.herokuapp.com/review'))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-12'>
            <h2 className="text-4xl font-bold text-center uppercase mb-10">Recent Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.data?.map((review, index) => <Review key={index} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;