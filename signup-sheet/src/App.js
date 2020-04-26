import React from 'react';
import './App.css';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import RegoContainer from './components/RegoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <RegoContainer />
    </div>
  );
}

export default App;
