import React from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import Pictures from "../db/mural.json"

const AlbumModal = (props) => {

  const pictures = props.picture ? props.picture.pictures.map( elem => {
    return (
      <Carousel.Item>
        <img width={800} height={400} alt="900x500" src={elem}/>
      </Carousel.Item>
    );
  }) : null;
  console.log(props.picture)
  return (
    <div className="static-modal" >

      <Modal show={props.open} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{props.picture ? props.picture.title : ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
            {pictures}
            </Carousel>
          </Modal.Body>
      </Modal>
    </div>
  );
}

export default AlbumModal;