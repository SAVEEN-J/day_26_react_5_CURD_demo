import React, { useContext, useEffect, useRef, useState } from 'react'
import { Container, Row ,Col } from 'react-bootstrap';
import { AllDataContext } from '..';

function CreateUser() {

  const{handleSumbmit,userUniqeId,newNoteRef,newfname,setNewfname,newLname,setNewLname,newEmail,setNewEmail}=useContext(AllDataContext);

// const[tabledata,setTabledata]=useState([]);
// console.log("leng",tabledata.length);
// //get the data from backend
//  useEffect(() => {
//    axios
//      .get('http://localhost:3005/UserData/')
//      .then(response => setTabledata(response.data));
//  },[setTabledata]);
// const[newfname,setNewfname]=useState('');
// const[newLname,setNewLname]=useState('');
// const[newEmail,setNewEmail]=useState('');


//  const newNoteRef =useRef(null);
//  const navigate=useNavigate();

//   let handleSumbmit=(event)=>{
//    event.preventDefault();
//     let noteObject = {
//       id:tabledata.length + 1,
//       firstname: newfname,
//       lastname: newLname,
//       email:newEmail
//     }
//      axios
//      .post('http://localhost:3005/UserData/',noteObject)
//      setNewfname('');
//      setNewLname('');
//      setNewEmail('');
//     newNoteRef.current.focus();
    
//     navigate('/create-user');
//   }
    //GET VALUE FROM USER
    // let handleInputFname=(e)=>{
    // setNewfname(e.target.value);

    // }
    // let handleInputLname=(e)=>{
    // setNewLname(e.target.value);
    // }
    // let handleInputEmail=(e)=>{
    // setNewEmail(e.target.value);
    // }

  return (
    <Container>
     
    {/* <div className="container mt-3"> */}
    <Row>
    <Col  md={{ span: 6, offset: 3 }}>
    <h2>Add User</h2>
    </Col>
  </Row>
  {/* <Row> */}
    <form onSubmit={handleSumbmit}>


    <div className="row">

      <div className="col-sm-3">
      {/* autoComplete='off' */}
      First Name
        <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname"  id='firstname' value={newfname}  onChange={(e) => setNewfname(e.target.value)} ref={newNoteRef} />
        <input type='hidden' value={userUniqeId}     />
        {/* <input type='hidden' value={tableClick.id} />  onChange={handleInputFname} ref={newNoteRef}*/}

      
        
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
    {/* </div> */}
    {/* </Row> */}

    
    </Container>
  )
}

export default CreateUser;