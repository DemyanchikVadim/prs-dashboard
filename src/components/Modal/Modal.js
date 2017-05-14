import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';

const ModalDialog = ({ modalConfig, closeModal }) => (
  <Modal isOpen={!_.isEmpty(modalConfig) && !_.isEmpty(modalConfig.configType)}
         toggle={() => closeModal('report')}
         className='modal-lg large'>
    <ModalHeader toggle={() => closeModal('report')}>Фото нарушения</ModalHeader>
    <ModalBody>
      <img className="auto-img" src={`data:image/jpeg;base64,${modalConfig.image}`} alt="das" />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={() => closeModal('report')}>Закрыть</Button>
    </ModalFooter>
  </Modal>
);

export default ModalDialog;
