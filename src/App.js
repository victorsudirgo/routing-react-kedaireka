import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Gateway from './pages/Gateway';
import Token from './pages/Token';
import AddUser from './pages/AddUser';
import Visualize from './pages/Visualize';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Dashboard/>}/>
          <Route path='/gateway' element={<Gateway/>}/>
          <Route path='/token' element={<Token/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/visualize' element={<Visualize/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
