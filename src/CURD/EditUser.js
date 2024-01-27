import React, { useContext,useState } from 'react'
//  import AllDataContext from '../ContextProvider/AllDataContext';

import UserTable from './UserTable';
import { UserDataContext } from './UserTable';

import axios from 'axios';
 import { createContext, useEffect } from 'react';


// const TableContext=React.createContext();


function EditUser() {
  console.log("edit");
   const edittabledata=useContext(UserDataContext);
//   const{tabledata,setTabledata}=useContext();
//  const{tableClick,setTableClick}=useContext();
const{tabledata,setTabledata}=useState([]);
 const{tableClick,setTableClick}=useState("");

  console.log("tabledata edit",tabledata.tableClick);

  
//  const[tableClick,setTableClick]=useState(props.tableClick) //when userclick
 
   
//    const[tabledata,setTabledata]=useState([]);  //stor in db

//    const[table,setTable]=useState(null)

//get backend

    useEffect(() => {
      axios
        .get('http://localhost:3002/UserData/')
        .then(response => setTabledata(response.data));
       
    },[]);

//  console.log(" datra edit",tabledata);

// //     // console.log("tabledata inside Edit",props.tableClick,tableClick.id);
// //     useEffect(()=>{
//      const selectData =tabledata.find((tabledata) =>tabledata.id ==tableClick.id)
//      if (selectData) {
//         setTable(selectData)
        
//      }
//  console.log(" table final output edit",tabledata);





    
//     },[tabledata,tableClick])
// console.log("selectDataaaaaaa",table);
    // const navigate=useNavigate(); 
      let handleSumbmit=()=>{
       
   
   
      
        
    
        //   navigate('/home')
        // value={table.firstname}
        // value={table.lastname}
        // value={table.email}
    
      }
  

   
  return (
    <>
    {/* <TableContext.Provider value={tabledata}> */}

   
 <div className="container mt-3">
  <h2> Edit User Forms</h2>
 
  <form >

 
  <div className="row">

      <div className="col-sm-2">
     
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname" autoComplete='off' id='firstname' value={tabledata.tableClick.firstname} />
      
        
      </div>
      <div className="col-sm-4">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname" autoComplete='off' id='lastname' value={tabledata.tableClick.lastname}  />
       
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
       Email
        <input type="text" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email" autoComplete='off' id='email' value={tabledata.tableClick.email}  />     
  
      </div>
     
    </div>&nbsp;
    <br/>
  
   
    <button type='' id='Sumbmit' className="btn btn-primary btn-sm ">Update User</button>
    
  </form>
</div>
{/* </TableContext.Provider> */}
{/* {UserDataContext.tableRowClick && <UpdateUser />} */}
</>
  )

   
}

export default EditUser;
