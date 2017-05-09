import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ReportCard({report, toggleLarge, large, }) {
  return (
  <div className="card report">
    <div className="card-header">
      Номер заявки:
      <span className="badge badge-success float-right">Активная</span>
    </div>
    <Button onClick={toggleLarge}>Показать фото нарушения</Button>
    <Modal isOpen={large} toggle={toggleLarge} className={'modal-lg large'}>
      <ModalHeader toggle={toggleLarge}>Фото нарушения</ModalHeader>
      <ModalBody>
        <img className="auto-img" src={`data:image/jpeg;base64,${report.image}`} alt="das" />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleLarge}>Закрыть</Button>
      </ModalFooter>
    </Modal>
    <div className="card-block">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    </div>
    <Button color="primary" >Вызвать эвакуатор</Button>
    <Button color="secondary" >Отклонить заявку</Button>
  </div>
  );
}

ReportCard.propTypes = {
  report: PropTypes.object.isRequired
};
