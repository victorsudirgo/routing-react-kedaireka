import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Gateway from './pages/Gateway';
import Token from './pages/Token';
import AddUser from './pages/AddUser';
import Visualize2 from './pages/Visualize2';
import Testfetch from './pages/Testfetch';
import Testdropdown from './pages/Testdropdown';
import AddProject from './pages/AddProject';


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
          <Route path='/visualize' element={<Visualize2/>}/>
          <Route path='/testfetch' element={<Testfetch/>}/>
          <Route path='/dropdown' element={<Testdropdown/>}/>
          <Route path='/addproject' element={<AddProject/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
