import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Loading from '../../components/Loading';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
    let errorMessage = '';
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])

    if (error) {
        errorMessage = <p className='p-2 text-center rounded-lg text-white bg-red-500'>{error?.message}</p>
    }

    if (loading) {
        return <Loading />
    }




    return (
        <>
            <div className="divider">OR</div>
            {
                error && errorMessage
            }
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
            >CONTINUE WITH GOOGLE
            </button>
        </>
    );
};

export default GoogleLogin;