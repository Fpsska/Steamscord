import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import AuthorisationPage from 'pages/AuthPage/AuthPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import ChatPageFirst from 'pages/ChatPages/ChatPageFirst';
import ChatPageSecond from 'pages/ChatPages/ChatPageSecond';
import NoFoundPage from 'pages/NoFoundPage/NoFoundPage';
import HomePage from 'pages/HomePage/HomePage';

import GeneralLayout from 'components/layout/Layout';
import ProtectedRoute from 'components/hoc/ProtectedRoute';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    fetchUsers,
    fetchComments,
    switchDataLoadingStatus
} from 'app/slices/profileSlice';

import { useFilter } from 'utils/hook/useFilter';

import './App.css';
import 'assets/scss/style.scss';
import 'assets/scss/media.scss';
import 'antd/dist/antd.css';

// /. imports

const App: React.FC = () => {
    const {
        users,
        usersFetchingError,
        commentsFetchingError,
        isDataLoading,
        usersFetchingStatus,
        commentsFetchingStatus
    } = useAppSelector(state => state.profileReducer);

    const { isAuthorized } = useAppSelector(state => state.authReducer);

    const { enteredSearchValue, setEnteredSearchValue, availableItems } =
        useFilter(users, 'personaname');

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        // getting users, comments data
        dispatch(fetchUsers());
        dispatch(fetchComments());
    }, []);

    useEffect(() => {
        // bad scalables of code
        const cheker =
            isAuthorized &&
            usersFetchingStatus === 'success' &&
            commentsFetchingStatus === 'success' &&
            setTimeout(() => {
                dispatch(switchDataLoadingStatus(false));
            }, 1300);

        return () => clearInterval(cheker);
    }, [usersFetchingStatus, commentsFetchingStatus, isAuthorized]);

    // /. effects

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/Steamscord/Authorisation"
                    element={<AuthorisationPage />}
                />

                <Route
                    path="/Steamscord"
                    element={
                        <GeneralLayout
                            users={users}
                            isError={
                                usersFetchingError || commentsFetchingError
                            }
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
                                        usersFetchingError ||
                                        commentsFetchingError
                                    } // error(true) if at least has ERR
                                />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="LocalElysium"
                        element={
                            <ProtectedRoute>
                                <ChatPageSecond
                                    isError={
                                        usersFetchingError ||
                                        commentsFetchingError
                                    }
                                />
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
