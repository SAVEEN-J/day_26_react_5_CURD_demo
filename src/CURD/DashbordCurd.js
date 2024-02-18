import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { Link, Route, Routes } from 'react-router-dom';
import './css/Apps.css'
import UserTable from './UserTable';
import { Container } from 'react-bootstrap';
import DeleteUser from './DeleteUser';
 import { AllDataContext } from '..';
import { useContext } from 'react';

function Dashboardcurd() {
let{handleDelete,handleclose}=useContext(AllDataContext);

  return (
    <Container>
    
  <h2 style={{textAlign:'center'}}>Curd Opreation</h2>

  <div className="container">
  <Link to="/dashbord">
    <button type="button" className="btn btn-primary ">Home</button>&nbsp;
    </Link>
  
    <Link to="/create-user">
    <button type="button" className="btn btn-success ">Add User</button>&nbsp;
    </Link>
    <Link to="/edit-user">
       <button type="button" className="btn btn-primary " id="" onClick={handleDelete} >Edit User</button>&nbsp;
    </Link>
    {/* <Link to="/User">
    <button type="button" className="btn btn-info ">Users</button>&nbsp;
    </Link> */}
    <Link to="/delete">
    <button type="button" id='' className="btn btn-danger" onClick={handleDelete} >Delete</button>&nbsp;
    </Link>
 </div>&nbsp;
<Routes>
     <Route path='/dashbord' element={ <UserTable />} />
     <Route path='/create-user' element={ <CreateUser />} />
     <Route path='/edit-user' element={ <EditUser />} />
    {/* <Route path='/User' element={ <UserTable />} /> */}
     <Route path='/delete' element={ <DeleteUser  />} />
  </Routes>
    </Container>
  )
}

export default Dashboardcurd;

