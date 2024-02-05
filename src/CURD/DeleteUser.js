import React, { useContext } from 'react'
import { AllDataContext } from '..';
import { Container } from 'react-bootstrap';


function DeleteUser() {
  let{tableClick}=useContext(AllDataContext);

 
  return (
 
    <Container>
      {tableClick &&
       <h2>No user Found</h2>
      }
    
   
    </Container>
  
  )
}

export default DeleteUser;