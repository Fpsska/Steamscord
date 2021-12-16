import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import "./assets/scss/reset.scss"
import "./assets/scss/media.scss"
import 'antd/dist/antd.css'
import Authorisation from './components/Auth/Auth';
import GeneralLayout from './components/Common/Layout';
import ChatPageFirst from "./components/Pages/ChatPages/ChatPageFirst"
import ChatPageSecond from './components/Pages/ChatPages/ChatPageSecond';
import NoFoundPage from './components/Pages/NoFoundPage/NoFoundPage';

import { useSelector } from 'react-redux';



function App() {
  const { AuthStatus } = useSelector(state => state.authReducer)

  return (
    <div className="App">
      {AuthStatus ? <>
        <Routes>
          <Route path="/Steamscord" element={<GeneralLayout />}>
            <Route index element={<ChatPageFirst />} />
            <Route path="/Steamscord/LocalElysium" element={<ChatPageSecond />} />
            <Route path="*" element={<NoFoundPage />} />
          </Route>
        </Routes>
      </> : <div className="section">
        <Authorisation />
      </div>}
    </div>
  );
}

export default App;
