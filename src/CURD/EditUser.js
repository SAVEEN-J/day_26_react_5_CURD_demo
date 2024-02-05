import React, { useContext } from 'react'

 import { Container, Row ,Col } from 'react-bootstrap';
import { AllDataContext } from '..';





function EditUser() {
 
 const{handleeditSubmit,hiddeneditid,seteditid, firstname, setFirstName, lastname,setLaststname,email, setEmail}=useContext(AllDataContext);

  return (
    <>

    {hiddeneditid && 
  <Container>
  <Row>
    <Col  md={{ span: 6, offset: 3 }}>
    <h2>Edit User</h2>
    </Col>
  </Row>
  <form onSubmit ={handleeditSubmit}>
  
  <div className="row">

      <div className="col-sm-3">
     
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="" autoComplete='off' id='firstname'  value={firstname} onChange={(e) => setFirstName(e.target.value)} />
        <input type='hidden' value={hiddeneditid}  onChange={(e) => seteditid(e.target.value)}/>
      
        
      </div>
      <div className="col-sm-3">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="lastname" autoComplete='off' id='lastname'  value={lastname}  onChange={(event) => setLaststname(event.target.value)} />
     
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
       Email
        <input type="email" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email" autoComplete='off' id='email'  value={email}  onChange={(event) => setEmail(event.target.value)} />     
       
      </div>
     
    </div>&nbsp;
    <br/>
  
   
    <button type='' id='Sumbmit' className="btn btn-primary btn-sm ">Update User</button>
    
  </form>

</Container>
}
</>
  )
   
}
export default EditUser;
