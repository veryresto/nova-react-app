import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Card from './Components/Card';

function App() {
  const navigate = useNavigate();
  return (
    <Layout>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button style={{marginTop: 20}} onClick={() => navigate('/hello')}>
        Go to Hello World
      </button>
      <Card />
      <Card />
    </Layout>
  );
}

export default App;
