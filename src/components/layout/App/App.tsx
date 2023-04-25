import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import ChatPageFirst from 'pages/ChatPages/ChatPageFirst';
import ChatPageSecond from 'pages/ChatPages/ChatPageSecond';

import AuthorisationPage from 'pages/AuthPage/AuthPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';

import NoFoundPage from 'pages/NoFoundPage/NoFoundPage';
import HomePage from 'pages/HomePage/HomePage';

import GeneralLayout from 'components/layout/Layout';
import ProtectedRoute from 'components/hoc/ProtectedRoute';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { switchDataLoadingStatus } from 'app/slices/profileSlice';

import { fetchUsers } from 'app/api/fetchUsers';
import { fetchComments } from 'app/api/fetchComments';

import { useFilter } from 'utils/hook/useFilter';

import './App.css';
import 'assets/styles/_media.scss';
import 'assets/styles/style.scss';
import 'antd/dist/antd.css';

// /. imports

const App: React.FC = () => {
    const {
        friends,
        comments,
        usersFetchingError,
        commentsFetchingError,
        isDataLoading,
        usersFetchingStatus,
        commentsFetchingStatus
    } = useAppSelector(state => state.profileReducer);

    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

    const { enteredSearchValue, setEnteredSearchValue, availableItems } =
        useFilter(comments, 'personaname');

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        // getting users, comments data
        dispatch(fetchUsers());

        Promise.all([fetchUsers])
            .then(() => console.log('users data was geted!'))
            .then(() => {
                setTimeout(() => {
                    dispatch(fetchComments());
                }, 1000);
            })
            .catch((err: any) => {
                throw new Error(`some error: ${err.message}`);
            });
    }, []);

    useEffect(() => {
        const validCondition =
            isUserAuthorized &&
            usersFetchingStatus === 'success' &&
            commentsFetchingStatus === 'success';

        const cheker = setTimeout(() => {
            validCondition && dispatch(switchDataLoadingStatus(false));
        }, 1300);

        return () => clearTimeout(cheker);
    }, [isUserAuthorized, usersFetchingStatus, commentsFetchingStatus]);

    // /. effects

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/Authorisation"
                    element={<AuthorisationPage />}
                />
                <Route
                    path="/"
                    element={
                        <GeneralLayout
                            users={friends}
                            isError={!!usersFetchingError}
                        />
                    }
                >
                    <Route
                        index
                        element={<HomePage />}
                    />
                    {/*  */}
                    <Route
                        path="Settings"
                        element={
                            <ProtectedRoute>
                                <SettingsPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={<NoFoundPage />}
                    />
                    {/* ./ other pages  */}
                    <Route
                        path="NikitosXClub"
                        element={
                            <ProtectedRoute>
                                <ChatPageFirst
                                    availableItems={availableItems}
                                    enteredSearchValue={enteredSearchValue}
                                    setEnteredSearchValue={
                                        setEnteredSearchValue
                                    }
                                    isLoading={isDataLoading}
                                    isError={
                                        !!usersFetchingError ||
                                        !!commentsFetchingError
                                    }
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="LocalElysium"
                        element={
                            <ProtectedRoute>
                                <ChatPageSecond />
                            </ProtectedRoute>
                        }
                    />
                    {/* ./ channels */}
                </Route>
            </Routes>
        </div>
    );
};

export default App;
