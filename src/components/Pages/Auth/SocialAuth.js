import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialAuth = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };

    useEffect( () => {
        if (user){
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Continue With Google</button>
        </div>
    );
};

export default SocialAuth;