import React, { useContext,useEffect,useState } from 'react'
 import { AllDataContext } from './DashbordCurd';
 import axios from 'axios';


// const TableContext=React.createContext();
// ,firstName,setFirstName,laststname,setLaststname,email,setEmail

function EditUser() {
  console.log("edit");
const tabledata =useContext(AllDataContext);
  //  console.log("edit",tabledata.tableClick);
    // console.log("edit2",tabledata.setuseTabledata,tabledata.usetabledata);


   const[firstName,setFirstName]=useState('');
   const[laststname,setLaststname]=useState('');
   const[email,setEmail]=useState('');
let selectedId=tabledata.tableClick.id
console.log("selectedId",selectedId);
      const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3005/UserData/${selectedId}`, {
               ... firstName,
               laststname,
               email
               
            });
        } catch (error) {
            console.error('Error updating note:', error);
        }
    }
   
  return (
    <>
    {/* <TableContext.Provider value={tabledata}> */}

   
 <div className="container mt-3">
  <h2> Edit User Forms</h2>
 
  <form onSubmit={handleSubmit} >

 
  <div className="row">

      <div className="col-sm-3">
     
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname" autoComplete='off' id='firstname'  value={tabledata.tableClick.firstname} onChange={(event) => setFirstName(event.target.value)} />
      
        
      </div>
      <div className="col-sm-3">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname" autoComplete='off' id='lastname'  value={tabledata.tableClick.lastname}  onChange={(event) => setLaststname(event.target.value)} />
     
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
       Email
        <input type="text" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email" autoComplete='off' id='email'  value={tabledata.tableClick.email}  onChange={(event) => setEmail(event.target.value)} />     
       
      </div>
     
    </div>&nbsp;
    <br/>
  
   
    <button type='' id='Sumbmit' className="btn btn-primary btn-sm ">Update User</button>
    
  </form>
</div>

</>
  )

   
}

export default EditUser;
