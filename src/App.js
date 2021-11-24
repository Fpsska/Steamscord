import React from 'react';
import './App.scss';
import "./assets/scss/reset.scss"
import 'antd/dist/antd.css'
import FormList from './components/Form/FormList';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';



function App() {
  const { AuthStatus } = useSelector(state => state.authReducer)

  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        <>
          {AuthStatus ? <>
            <ProfilePage />
          </> : <div className="section">
            <FormList />
          </div>}
        </>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
