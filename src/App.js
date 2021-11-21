import React from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import FormList from './components/Form/FormList';

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">

        <div className="section">
          <FormList />
        </div>

      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
