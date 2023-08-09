import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogin);

    useEffect(() => {
        let isSubscribed = true;
        const unsubscribed = async () => {
            if (!isLogin)
                navigate("/login")
        };

        if (isSubscribed) {
            unsubscribed();
        }
        return () => {
            isSubscribed = false;
        };
    }, [isLogin, navigate])

    return <>{children}</>;
}

export default AuthProvider