import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import { changeLocation } from 'Redux/action/locationAction';

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogin);
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        let isSubscribed = true;
        const unsubscribed = async () => {
            if (matchPath("/login", location.pathname) === null) {
                dispatch(changeLocation(location.pathname))
            }
            if (!isLogin)
                navigate("/login")
        };

        if (isSubscribed) {
            unsubscribed();
        }
        return () => {
            isSubscribed = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin, navigate])

    return <>{children}</>;
}

export default AuthProvider