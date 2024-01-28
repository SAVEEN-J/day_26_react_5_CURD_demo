import React, { useContext, useEffect, useRef, useState } from 'react'
 import {useNavigate } from 'react-router-dom';
import axios from 'axios';

 import { AllDataContext } from './DashbordCurd';




function CreateUser() {
  const UseUserDataContext=useContext(AllDataContext);
 const{tabledata,setTabledata}=useState(UseUserDataContext.setuseTabledata);

const[newfname,setNewfname]=useState('');
const[newLname,setNewLname]=useState('');
const[newEmail,setNewEmail]=useState('');


 const navigate=useNavigate();
//  const newNoteContentRef = useRef(null);
//define the add new user 
  let handleSumbmit=(event)=>{
   event.preventDefault();
    // console.log("handleSumbmit",event);
//  if(!newfname||!newLname||!newEmail)return;
  
    let noteObject = {
      id: tabledata + 1,
      firstname: newfname,
      lastname: newLname,
      email:newEmail
    }
    console.log("noteObject",noteObject);
     // add the new object to the notes state
    //  setTabledata(tabledata.concat(noteObject));
    // setTabledata(tabledata(noteObject));

     axios
     .post('http://localhost:3005/UserData/',noteObject)
     setNewfname('');
     setNewLname('');
     setNewEmail('');

    //  newNoteContentRef.current.focus();
  // console.log(noteObject);
   
  // Dashboardcurd();

  }
  //edit
  // add contacts
// let form = document.getElementById("Sumbmit");

// form.addEventListener("click", function(ev) {
    // ev.preventDefault();


  //   var firstname = document.getElementById("firstname").value;
  //   var lastname = document.getElementById("lastname").value;
  //  var mail = document.getElementById("email").value;
  //  console.log("firstname",firstname);
// })

  // <Dashboardcurd/>
  let handleInputFname=(e)=>{
   
    setNewfname(e.target.value);
    // console.log(e.target.value);
   
   }
let handleInputLname=(e)=>{
  setNewLname(e.target.value);

}
let handleInputEmail=(e)=>{
  setNewEmail(e.target.value);

}

  return (
    <>
    <div className="container mt-3">
  <h2> User Forms</h2>
 
  <form onSubmit={handleSumbmit}>

 
  <div className="row">

      <div className="col-sm-3">
      {/* autoComplete='off' */}
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname"  id='firstname' value={newfname} onChange={handleInputFname} />
      
        
      </div>
      <div className="col-sm-3">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname"  id='lastname' value={newLname} onChange={handleInputLname}  />
       
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
       Email
        <input type="text" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email"  id='email' value={newEmail}  onChange={handleInputEmail} />     
  
      </div>
     
    </div>&nbsp;
    <br/>
  
   
    <button type='submit' id='Sumbmit' className="btn btn-primary btn-sm ">Add User</button>
    
  </form>
</div>

    
    </>
  )
}

export default CreateUser;