import React, { useContext } from 'react'
import { AllDataContext } from '..';
import { Button, Container, Modal } from 'react-bootstrap';


function DeleteUser() {
  let{show,handleClose,handleClosedelete,tableClickdelete,goback}=useContext(AllDataContext);
console.log("tableClickdelete",tableClickdelete.id);
 
  return (

    <Container> 
  {(tableClickdelete.id >= 1) ?(

    <Modal show={show} onHide={goback}> 
        <Modal.Header closeButton>
          <Modal.Title>Delete Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Are you want to delete this record ??
        </Modal.Body>
        <Modal.Footer>
          <Button variant=""  className="btn btn-primary" onClick={handleClosedelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  ):(
    <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Delete Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Select the record to delete.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={goback}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>

  )

    }


    </Container>
  
  )
}

export default DeleteUser;