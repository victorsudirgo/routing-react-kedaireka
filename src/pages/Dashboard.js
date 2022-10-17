import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboard'>
    <h1>Dashboard</h1>
    <Link to='/visualize'>
    <button className='btn-viz' onClick=''>Visualize</button>
    </Link>
    </div>
  );
}

export default Dashboard