import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';



function App() {

  
  return (
    <>
      <CssBaseline />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
