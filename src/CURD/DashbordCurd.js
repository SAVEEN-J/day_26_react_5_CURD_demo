
// import ListUser from './ListUser'
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import React, { useContext, useState } from 'react'
import { createContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// import AllDataContext from '../ContextProvider/AllDataContext';
import './css/Apps.css'
import UserTable from './UserTable';
import { UserDemoDataContext } from '../component/contentwrapper';





function Dashboardcurd() {
  const useDeomoDataContext=useContext(UserDemoDataContext)
  // const{tabledataUserCliCk,setabledataUserCliCk}=useState(tableClick);
 
  console.log({useDeomoDataContext});
//  const{tabledata,setTabledata}=useContext(AllDataContext);
  // const[tabledata,setTabledata]=useState([]);
let edithandle=()=>{
  // let tdLength=tabledataUserCliCk;

  // setabledataUserCliCk(tabledataUserCliCk)

  // console.log("tdLength tableClick",tableClick)

}

  return (
    <>
{/* <AllDataContext.Provider value={{editClick}} > */}
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
       <button type="button" className="btn btn-primary " id="hidden"  >Edit User</button>
    </Link>
    <Link to="/list-User">
    <button type="button" className="btn btn-primary ">List User</button>&nbsp;
    </Link>
    {/* <Link to="/edit-user">
       <button type="button" className="btn btn-info " id="hidden"  >Edit User</button>
    </Link> */}
    {/* <Link to="/create-user">
    <button type="button" className="btn btn-primary ">Delete User</button>&nbsp;
    </Link> */}
         

</div>&nbsp;
{/* <ListUser tabledata={tabledata} setTabledata={setTabledata} /> */}

{/* <ListUser />      */}



</div>

{/* </AllDataContext.Provider> */}
<Routes>
     <Route path='/dashbord' element={ <UserTable />} />
     <Route path='/create-user' element={ <CreateUser />} />
     <Route path='/edit-user' element={ <EditUser />} />
   <Route path='/list-User' element={ <UserTable />} />


  </Routes>
  {/* <UserTable/> */}

    </>
  )
}

export default Dashboardcurd;