import React from 'react';

import { Routes, Route } from 'react-router-dom';

import GeneralLayout from '../Common/Layout';
import AuthorisationPage from '../Pages/AuthPage/AuthPage';
import SettingsPage from '../Pages/SettingsPage/SettingsPage';
import ChatPageFirst from '../Pages/ChatPages/ChatPageFirst';
import ChatPageSecond from '../Pages/ChatPages/ChatPageSecond';
import NoFoundPage from '../Pages/NoFoundPage/NoFoundPage';
import HomePage from '../Pages/HomePage/HomePage';

import ProtectedRoute from '../../hoc/ProtectedRoute';

import './App.css';
import '../../assets/scss/style.scss';
import '../../assets/scss/media.scss';
import 'antd/dist/antd.css';

import { useFilter } from '../../hook/useFilter';

import useGetProfileInfoQuery from '../../app/api/steamAPI';

const App = () => {

  const { data = [], isLoading, isError } = useGetProfileInfoQuery();

  const {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems
  } = useFilter(data, 'personaname');

  return (
    <div className="App">
      <Routes>

        <Route path="/Steamscord/Authorisation" element={<AuthorisationPage />} />

        <Route
          path="/Steamscord"
          element={
            <GeneralLayout data={data} isError={isError} />
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
                  isLoading={isLoading}
                  isError={isError}
                />
              </ProtectedRoute>
            } />

          <Route path="LocalElysium"
            element={
              <ProtectedRoute>
                <ChatPageSecond isError={isError} />
              </ProtectedRoute>
            } />

          {/* ./ channels */}

        </Route>

      </Routes>
    </div>
  );
}

export default App;
