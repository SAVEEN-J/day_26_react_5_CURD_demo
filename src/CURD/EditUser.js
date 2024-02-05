import React, { useContext } from 'react'

 import { Container, Row ,Col } from 'react-bootstrap';
import { AllDataContext } from '..';





function EditUser() {
 
 const{handleeditSubmit,hiddeneditid,seteditid, firstname, setFirstName, lastname,setLaststname,email, setEmail}=useContext(AllDataContext);
//  const {id}=useParams();
//  console.log("useParams-EDIT",id);
   
// console.log("tableClick-EDIT DATA",tableClick);


  // let {tableClick}=useContext(AllDataContext);
  // console.log("tableClickEDIT",tableClick);
// const[tabledata,setTabledata]=useState([]);
// const[newfname,setUpdatefname]=useState('');
// const[newLname,setNewLname]=useState('');
// const[newEmail,setNewEmail]=useState('');
  
// const[tabledata,setTabledata]=useState([]);

// useEffect( async() => {
//   const responce = await axios.get('http://localhost:3005/UserData/');
//   //  .then(responce =>setOptions(responce.data));
//   setTabledata(responce.data);
// },[]);
// useEffect(()=>{
//   const selectedNotes=tabledata.find((value)=> value.id ==selectoptions)
//   if (selectedNotes) {
//     //  console.log(selectedNotes.important);
//      setNote(selectedNotes);
//      setContent(selectedNotes.content);
//      setImportant(selectedNotes.important);
//   }

// },[selectoptions, options])
// const tabledata =useContext(AllDataContext);
  //  console.log("edit",tabledata.tableClick);
    // console.log("edit2",tabledata.setuseTabledata,tabledata.usetabledata);

  //  const[firstName,setFirstName]=useState('');
  //  const[lastname,setLaststname]=useState('');
  //  const[email,setEmail]=useState('');
// let selectedId=tabledata.tableClick.id
// console.log("selectedId",selectedId);
      // const handleSubmit = async (event) => {
      //   event.preventDefault();

        // try {
        //     await axios.put(`http://localhost:3005/UserData/${selectedId}`, {
        //        ... firstName,
        //        lastname,
        //        email
               
        //     });
        // } catch (error) {
        //     console.error('Error updating note:', error);
        // }
    //  }
  //   let selectHandler=(event)=>{
  //     const id =parseInt(event.target.value);
  //     setSelectOptions(id);
  // }
  return (
    <>
    {/* <TableContext.Provider value={tabledata}> */}
    {hiddeneditid && 
  <Container>
  <Row>
    <Col  md={{ span: 6, offset: 3 }}>
    <h2>Edit User</h2>
    </Col>
  </Row>
  {/* onSubmit={(e) => e.preventDefault()} */}
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
{/* <form onSubmit={(e) => e.preventDefault()} >
  
 
<div className="row">

    <div className="col-sm-3">
   
    First Name
      <input type="text" className="form-control form-control-sm" placeholder="Enter FirstName" name="firstname" autoComplete='off' id='firstname'  value={tableClick.firstname} onChange={(event) => setFirstName(event.target.value)} />
      <input type='hidden' value={tableClick.id} />
    
      
    </div>
    <div className="col-sm-3">
    Last Name
      <input type="text" className="form-control form-control-sm" placeholder="Enter LastName" name="laststname" autoComplete='off' id='lastname'  value={tableClick.lastname}  onChange={(event) => setLaststname(event.target.value)} />
   
    </div>
  </div>&nbsp;
  <div className="row">
    <div className="col-sm-6">
     Email
      <input type="text" className="form-control form-control-sm" placeholder="Eg : johndoe@mail.com" name="email" autoComplete='off' id='email'  value={tableClick.email}  onChange={(event) => setEmail(event.target.value)} />     
     
    </div>
   
  </div>&nbsp;
  <br/>

 
  <button type='' id='Sumbmit' className="btn btn-primary btn-sm ">Update User</button>
  
</form> */}
export default EditUser;
