import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
import _ from 'lodash';

const ModalDialog = ({ modalConfig, closeModal }) => (
  <div>
    <Modal show={!_.isEmpty(modalConfig) && !_.isEmpty(modalConfig.app)} onHide={closeModal}>

        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip"><strong>Close</strong></Tooltip>
          }
        >
          <button className="close" onClick={closeModal}>×</button>
        </OverlayTrigger>
        <Modal.Title>
          <p>
            fd
          </p>
        </Modal.Title>
      <Modal.Body className="modal-scrollbar">
        <h1>Vadim</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={'btn-without-border modal-success pull-left margin-left-8'}
          onClick={closeModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default ModalDialog;
