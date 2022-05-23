import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import fetchApi from '../../interceptor';


const MyReviews = () => {

    const [user, loading] = useAuthState(auth);

    const handleReview = async (event) => {
        event.preventDefault();
        const review = {
            name: user?.displayName,
            email: user?.email,
            rating: event.target.rating.value,
            description: event.target.review.value
        }
        const { data } = await fetchApi.post('/review', review);

        if (data?.insertedId) {
            console.log(data);
            toast.success('Review submitted successfully.');
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="flex justify-center mt-16">
            <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleReview}>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Your Rating</span>
                            </label>
                            <select name='rating' className="select select-bordered w-full">
                                <option value={5.0} selected>5.0</option>
                                <option value={4.5}>4.5</option>
                                <option value={4.0}>4.0</option>
                                <option value={3.5}>3.5</option>
                                <option value={3.0}>3.0</option>
                                <option value={2.0}>2.0</option>

                            </select>
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea name='review' className="textarea textarea-bordered h-36" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;