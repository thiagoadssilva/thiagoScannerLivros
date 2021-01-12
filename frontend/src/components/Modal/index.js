import React from 'react';
import {Modal} from 'react-bootstrap';

export default (props) =>{
    console.log(props);
    return(
        <Modal show={props.openModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.title}
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    );
}