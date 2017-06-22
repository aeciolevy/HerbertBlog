import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AlbumModal = (props) => {

  return (
    <div className="static-modal" >

      <Modal show={props.open} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Nothing
          </Modal.Body>
      </Modal>
    </div>
  );
}

export default AlbumModal;