import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const SocialAuth = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };

    if (user) {
        const userInfo = { email: user.user.email }; 
        fetch('http://localhost:5000/add-user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    useEffect( () => {
        if (user){
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

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