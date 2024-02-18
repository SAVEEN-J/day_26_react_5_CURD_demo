
// import ListUser from './ListUser'
import CreateUser from './CreateUser';
import EditUser from './EditUser';
// import React, {  useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
 import { createContext, useContext, useEffect } from 'react';
import './css/Apps.css'
import UserTable from './UserTable';
import { Container } from 'react-bootstrap';
import DeleteUser from './DeleteUser';
 import { AllDataContext } from '..';

//  export const AllDataContext=createContext();






function Dashboardcurd() {
// let{handleDelete,setModalShow,modalShow}=useContext(AllDataContext);
let{handleDelete}=useContext(AllDataContext);



  return (
    <Container>
{/* <AllDataContext.Provider> */}
 
    {/* <div className="container"> */}
    
  <h2 style={{textAlign:'center'}}>Curd Opreation</h2>

  <div className="container">
  <Link to="/dashbord">
    <button type="button" className="btn btn-primary ">Home</button>&nbsp;
    </Link>
  
    <Link to="/create-user">
    <button type="button" className="btn btn-success ">Add User</button>&nbsp;
    </Link>
    <Link to="/edit-user">
       <button type="button" className="btn btn-primary " id=""  >Edit User</button>&nbsp;
    </Link>
    <Link to="/User">
    <button type="button" className="btn btn-info ">Users</button>&nbsp;
    </Link>
    <Link to="/delete">
    <button type="button" id='' className="btn btn-danger  " onClick={handleDelete}>Delete</button>&nbsp;
    </Link>
    {/* <Link to="/delete">
    <button type="button" id='' className="btn btn-danger  " onClick={() => setModalShow(true)}>Delete</button>&nbsp;
    </Link> */}
</div>&nbsp;
{/* </div> */}
<Routes>
     <Route path='/dashbord' element={ <UserTable />} />
     <Route path='/create-user' element={ <CreateUser />} />
     <Route path='/edit-user' element={ <EditUser />} />
    <Route path='/User' element={ <UserTable />} />
    {/* <Route path='/delete' element={ <DeleteUser  show={modalShow} onHide={() => setModalShow(false)}/>} /> */}
    <Route path='/delete' element={ <DeleteUser  />} />

      

       <Route path='/delete' element={ <UserTable />} />


  </Routes>
  {/* </AllDataContext.Provider> */}
    </Container>
  )
}

export default Dashboardcurd;