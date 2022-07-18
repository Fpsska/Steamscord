import React from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Authorisation from './components/Auth/Auth';
import GeneralLayout from './components/Common/Layout';
import ChatPageFirst from "./components/Pages/ChatPages/ChatPageFirst"
import ChatPageSecond from './components/Pages/ChatPages/ChatPageSecond';
import NoFoundPage from './components/Pages/NoFoundPage/NoFoundPage';
import HomePage from './components/Pages/HomePage/HomePage';

import './App.css';
import "./assets/scss/style.scss"
import "./assets/scss/media.scss"
import 'antd/dist/antd.css'

import { useFilter } from './hook/useFilter';
import { useData } from './hook/useData';

function App() {
  const { AuthStatus } = useSelector(state => state.authReducer)
  const { data, isError, isLoading } = useData();
  const {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems } = useFilter(data, "personaname");

  return (
    <div className="App">
      {AuthStatus ?
        <Routes>
          <Route path="/Steamscord"
            element={<GeneralLayout
              enteredSearchValue={enteredSearchValue}
              setEnteredSearchValue={setEnteredSearchValue}
              data={data}
              isLoading={isLoading}
              isError={isError}
            />}>

            <Route index element={<HomePage />} />
            <Route path="NikitosXClub"
              element={<ChatPageFirst
                availableItems={availableItems}
                isLoading={isLoading}
                isError={isError}
              />}
            />
            <Route path="LocalElysium" element={<ChatPageSecond />} />

            <Route path="Authorisation" element={<Authorisation />} />
            <Route path="*" element={<NoFoundPage />} />

          </Route>
        </Routes>
        :
        <div className="section"><Authorisation /></div>
      }
    </div>
  );
}

export default App;
