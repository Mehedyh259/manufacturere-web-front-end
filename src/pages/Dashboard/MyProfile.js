import { data } from 'autoprefixer';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import fetchApi from '../../interceptor';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const { data: profile, isLoading, refetch } = useQuery(['profile', user], async () => await fetchApi.get(`/user/${user?.email}`));

    if (loading || isLoading) {
        return <Loading />
    }

    const handleProfile = async (event) => {
        event.preventDefault();
        const userProfile = {
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkdin: event.target.linkdin.value,
        }

        const { data } = await fetchApi.put(`/user/update/${user.email}`, userProfile);
        if (data.acknowledged) {

            toast.success('profile updated successfully')
            refetch();
        }

    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10'>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-3xl font-bold mb-5">My Profile</h2>
                    <div>
                        <p className="text-xl mb-3">Name: <span className="text-primary">{profile.data?.name}</span> </p>
                        <p className="text-xl mb-3">Email: <span className="text-primary">{profile.data?.email}</span> </p>
                        <p className="text-xl mb-3">Education: <span className="text-primary">{profile.data?.education}</span> </p>
                        <p className="text-xl mb-3">Location: <span className="text-primary">{profile.data?.location}</span> </p>
                        <p className="text-xl mb-3">Phone: <span className="text-primary">{profile.data?.phone}</span> </p>
                        <p className="text-xl mb-3">LinkedIn: <span className="text-primary">{profile.data?.linkdin}</span> </p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-3xl font-bold mb-2">Update Profile</h2>
                    <div>
                        <form onSubmit={handleProfile}>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Your Education</span>
                                </label>
                                <textarea defaultValue={profile?.data?.education} name='education' className="textarea textarea-bordered h-16" />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Your Location</span>
                                </label>
                                <input defaultValue={profile?.data?.location} name='location' type='text' className="input input-bordered" />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input defaultValue={profile?.data?.phone} name='phone' type='text' className="input input-bordered" />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text"> LinkdIn Profile Link</span>
                                </label>
                                <input defaultValue={profile?.data?.linkdin} name='linkdin' type='url' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <button type='submit' className="btn btn-primary">UPDATE</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;