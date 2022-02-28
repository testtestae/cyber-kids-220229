import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'


const MyModal = (props)=>{return(
    
    <Modal
        show={props.modal}
        onHide={() => props.setModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.modal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.modal.payload}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.setModal(false)}>Закрыт</Button>
      </Modal.Footer>
    </Modal>
)}

export default MyModal