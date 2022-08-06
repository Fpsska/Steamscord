import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import GeneralLayout from '../Common/Layout';
import AuthorisationPage from '../Pages/AuthPage/AuthPage';
import SettingsPage from '../Pages/SettingsPage/SettingsPage';
import ChatPageFirst from '../Pages/ChatPages/ChatPageFirst';
import ChatPageSecond from '../Pages/ChatPages/ChatPageSecond';
import NoFoundPage from '../Pages/NoFoundPage/NoFoundPage';
import HomePage from '../Pages/HomePage/HomePage';

import ProtectedRoute from '../../hoc/ProtectedRoute';

import { fetchUsers, fetchComments, switchDataLoadingStatus } from '../../app/store/profileSlice';
import { useFilter } from '../../hook/useFilter';

import './App.css';
import '../../assets/scss/style.scss';
import '../../assets/scss/media.scss';
import 'antd/dist/antd.css';

const App = () => {

  const {
    users,
    usersFetchingError,
    commentsFetchingError,
    isDataLoading,
    usersFetchingStatus,
    commentsFetchingStatus
  } = useSelector(state => state.profileReducer);

  const { isAuthorized } = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => { // getting users, comments data
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, []);

  useEffect(() => { // bad scalables of code 
    const cheker = (isAuthorized && usersFetchingStatus === 'success' && commentsFetchingStatus === 'success') &&
      setTimeout(() => {
        dispatch(switchDataLoadingStatus(false));
      }, 1300);

    return () => clearInterval(cheker);
  }, [usersFetchingStatus, commentsFetchingStatus, isAuthorized]);

  const {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems
  } = useFilter(users, 'personaname');

  return (
    <div className="App">
      <Routes>

        <Route path="/Steamscord/Authorisation" element={<AuthorisationPage />} />

        <Route
          path="/Steamscord"
          element={
            <GeneralLayout users={users} isError={usersFetchingError || commentsFetchingError} />
          }>

          <Route index element={<HomePage />} />

          {/*  */}

          <Route path="Settings" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NoFoundPage />} />

          {/* ./ other pages  */}

          <Route path="NikitosXClub"
            element={
              <ProtectedRoute>
                <ChatPageFirst
                  availableItems={availableItems}
                  enteredSearchValue={enteredSearchValue}
                  setEnteredSearchValue={setEnteredSearchValue}
                  isLoading={isDataLoading}
                  isError={usersFetchingError || commentsFetchingError} // error(true) if at least has ERR
                />
              </ProtectedRoute>
            } />

          <Route path="LocalElysium"
            element={
              <ProtectedRoute>
                <ChatPageSecond isError={usersFetchingError || commentsFetchingError} />
              </ProtectedRoute>
            } />

          {/* ./ channels */}

        </Route>

      </Routes>
    </div>
  );
}

export default App;
