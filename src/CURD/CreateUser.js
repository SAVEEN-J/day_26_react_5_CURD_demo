import React, { useContext } from 'react'
import { Container, Row ,Col } from 'react-bootstrap';
import { AllDataContext } from '..';

function CreateUser() {

  const{handleSumbmit,userUniqeId,newNoteRef,newfname,setNewfname,newLname,setNewLname,newEmail,setNewEmail}=useContext(AllDataContext);


  return (
    <Container>
    <Row>
    <Col  md={{ span: 6, offset: 3 }}>
    <h2>Add User</h2>
    </Col>
  </Row>
    <form onSubmit={handleSumbmit}>
    <div className="row">

      <div className="col-sm-3">
           First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname"  id='firstname' value={newfname}  onChange={(e) => setNewfname(e.target.value)} ref={newNoteRef} />
        <input type='hidden' value={userUniqeId} />
    
        
      </div>
      <div className="col-sm-3">
      Last Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname"  id='lastname' value={newLname} onChange={(e)=>setNewLname(e.target.value) }  />
        
      </div>
    </div>&nbsp;
    <div className="row">
      <div className="col-sm-6">
        Email
        <input type="email" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email"  id='email' value={newEmail}  onChange={(e)=>setNewEmail(e.target.value) } />     

      </div>
      
    </div>&nbsp;
    <br/>


    <button type='submit' id='Sumbmit' className="btn btn-primary btn-sm ">Add User</button>

    </form>
    </Container>
  )
}

export default CreateUser;