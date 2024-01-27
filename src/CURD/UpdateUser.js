import React from 'react'

function UpdateUser() {

  return (
    <>
    <div>UpdateUser form</div>
    <form >

 
  <div className="row">

      <div className="col-sm-2">
     
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname" autoComplete='off' id='firstname'  />
      
      
        
      </div>
      <div className="col-sm-4">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname" autoComplete='off' id='lastname'  />
       
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
       Email
        <input type="text" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email" autoComplete='off' id='email'  />     
  
      </div>
     
    </div>&nbsp;
    <br/>
  
   
    <button type='' id='Sumbmit' className="btn btn-primary btn-sm ">Update User</button>
    
  </form>

  </>
  )
  

}

export default UpdateUser;