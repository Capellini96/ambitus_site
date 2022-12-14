import React, { useState } from 'react'
import { Alert, Modal } from 'react-bootstrap'

export default function AppPopup() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  handleShow();
  return (
    <>
         <Modal
        show={show}
        onHide={handleClose}
        className="popbox"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cardx mb-4 box-shadow">
                  <div className="cardx-header text-center">
                  <Alert variant="success">
                   MVP will be available in December!
                 </Alert>
                    </div>
                  </div>
                </div>
              </div>
                    </div>
                  
              
        </Modal.Body>
      </Modal>
    
    </>
  )
}
