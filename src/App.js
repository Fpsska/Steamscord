import React from 'react';
import './App.scss';
import "./assets/scss/reset.scss"
import "./assets/scss/media.scss"
import 'antd/dist/antd.css'
import Authorisation from './components/Auth/Auth';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';



function App() {
  const { AuthStatus } = useSelector(state => state.authReducer)

  return (
    <div className="App">
      {AuthStatus ? <>
        <ProfilePage />
      </> : <div className="section">
        <Authorisation />
      </div>}
    </div>
  );
}

export default App;
