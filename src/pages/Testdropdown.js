import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testdropdown() {
    const projectdata = [
        {
        name: 'Kedaireka UMN',
        url: 'https://drive.google.com/uc?export=view&id=1nMOizb2OCiGyaejRmBKecZ2nrEtDHhwo'
        },
        {
        name: 'ICE BSD',
        url: 'https://drive.google.com/uc?export=view&id=1yojee_I9XbF6_Mv2O5kGP4hvygibOkZg'
        }]
        
  return (
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Bus
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></div>
  )
}

export default Testdropdown