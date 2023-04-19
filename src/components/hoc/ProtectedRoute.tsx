import React from 'react';

import { Navigate, useLocation } from 'react-router';

import { useAppSelector } from 'app/hooks';

// /.imports

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

    const location = useLocation();

    // /. hooks

    if (!isUserAuthorized) {
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
