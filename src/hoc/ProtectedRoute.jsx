import React from 'react';

import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router';

// /.imports

const ProtectedRoute = ({ children }) => {
    const { isAuthorized } = useSelector(state => state.authReducer);
    const location = useLocation();

    if (!isAuthorized) {
        return (
            <Navigate
                to="/Steamscord/Authorisation"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;
