
// import ListUser from './ListUser'
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import React, {  useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { createContext, useEffect } from 'react';
import './css/Apps.css'
import UserTable from './UserTable';

export const AllDataContext=createContext();
function Dashboardcurd() {
  const[usetabledata,setuseTabledata]=useState([]);
  //from user Table 
  const[tableClick,setTableClick]=useState([]);
  //from edit User
 


 //get the data from backend
   useEffect(() => {
     axios
       .get('http://localhost:3005/UserData/')
       .then(response => setuseTabledata(response.data));
   },[]);
  // const{tabledataUserCliCk,setabledataUserCliCk}=useState(tableClick);
 
  // console.log({useDeomoDataContext});
//  const{tabledata,setTabledata}=useContext(AllDataContext);
  // const[tabledata,setTabledata]=useState([]);
let edithandle=()=>{
  // let tdLength=tabledataUserCliCk;

  // setabledataUserCliCk(tabledataUserCliCk)

  // console.log("tdLength tableClick",tableClick)

}

  return (
    <>
<AllDataContext.Provider value={{usetabledata,setuseTabledata,tableClick,setTableClick}} >
 
    <div className="container">
    
  <h2 style={{textAlign:'center'}}>Curd Opreation</h2>

  <div className="container">
  <Link to="/dashbord">
    <button type="button" className="btn btn-primary ">Home</button>&nbsp;
    </Link>
  
    <Link to="/create-user">
    <button type="button" className="btn btn-primary ">Add User</button>&nbsp;
    </Link>
    <Link to="/edit-user">
       <button type="button" className="btn btn-primary " id="hidden"  >Edit User</button>&nbsp;
    </Link>
    <Link to="/User">
    <button type="button" className="btn btn-primary ">Users</button>&nbsp;
    </Link>
</div>&nbsp;
</div>
<Routes>
     <Route path='/dashbord' element={ <UserTable />} />
     <Route path='/create-user' element={ <CreateUser />} />
     <Route path='/edit-user' element={ <EditUser />} />
    <Route path='/User' element={ <UserTable />} />

  </Routes>
  </AllDataContext.Provider>
    </>
  )
}

export default Dashboardcurd;