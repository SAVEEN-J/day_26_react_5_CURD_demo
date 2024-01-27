import React, { useContext, useEffect, useState } from 'react'
// import {useNavigate } from 'react-router-dom';
import axios from 'axios';



function CreateUser() {
  console.log("create useer");
 const{tabledata,setTabledata}=useState();
//  const{tabledata,setTabledata}=useContext(AllDataContext);
console.log(tabledata);
const[newfname,setNewfname]=useState('')
const[newLname,setNewLname]=useState('')
const[newEmail,setNewEmail]=useState('')


// const navigate=useNavigate();
 
//define the add new user 
  let handleSumbmit=(event)=>{
     event.preventDefault();
 if(!newfname||!newLname||!newEmail)return;
  
    let noteObject = {
      id: tabledata.length + 1,
      firstname: newfname,
      lastname: newLname,
      email:newEmail
    }
     // add the new object to the notes state
    //  setTabledata(tabledata.concat(noteObject));
     setTabledata(tabledata(noteObject));

     axios
     .post('http://localhost:3002/UserData/',noteObject)

  // console.log(noteObject);
  // navigate('/home')
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

      <div className="col-sm-2">
      {/* autoComplete='off' */}
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname"  id='firstname' value={newfname} onChange={handleInputFname} />
      
        
      </div>
      <div className="col-sm-4">
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