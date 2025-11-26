import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuth2RedirectHandler = ({ onLogin }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const studentId = params.get('studentId');
        const name = params.get('name');

        if (token && studentId) {
            onLogin(token, studentId, name);
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [location, navigate, onLogin]);

    return <div>Redirecting...</div>;
};

export default OAuth2RedirectHandler;
