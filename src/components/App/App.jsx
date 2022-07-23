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
import { useData } from '../../hook/useData';

function App() {
  const { data, isError, isLoading } = useData();

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
            <GeneralLayout data={data} />
          }>

          <Route index element={<HomePage />} />

          {/*  */}

          <Route path="Settings" element={<SettingsPage />} />
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
                <ChatPageSecond />
              </ProtectedRoute>
            } />

          {/* ./ channels */}

        </Route>

      </Routes>
    </div>
  );
}

export default App;
