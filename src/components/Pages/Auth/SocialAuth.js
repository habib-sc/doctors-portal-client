import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Spinner from '../../Shared/Spinner/Spinner';

const SocialAuth = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };


    useEffect( () => {
        if (token){
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Continue With Google</button>
        </div>
    );
};

export default SocialAuth;