import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default function ReportCard({report, openModal, deleteReport}) {
  return (
  <div className="card report">
    <div className="card-header">
      Тип нарушения: {report.type}
      <span className="badge badge-success float-right">Активная</span>
    </div>
      <div className="card-block">
        <h5>Фото нарушений</h5>
        <img className="auto-img-small btn " src={`data:image/jpeg;base64,${report.image}`} alt="das" onClick={() => {openModal({
          image: report.image,
          configType: 'report'
        });
        }}  />
        <img className="auto-img-small btn" src={`data:image/jpeg;base64,${report.image}`} alt="das" onClick={() => {openModal({
          image: report.image,
          configType: 'report'
        });
        }}  />
        <img className="auto-img-small btn " src={`data:image/jpeg;base64,${report.image}`} alt="das" onClick={() => {openModal({
          image: report.image,
          configType: 'report'
        });
        }}  />
        <img className="auto-img-small btn " src={`data:image/jpeg;base64,${report.image}`} alt="das" onClick={() => {openModal({
          image: report.image,
          configType: 'report'
        });
        }}  />
      </div>
    <div className="card-block">
      <h6>Адрес: {report.street}</h6>
      <h6>Номер: {report.number}</h6>
      <h6>Комментарий: {report.comment}</h6>
    </div>
    <Button color="primary" >Вызвать эвакуатор</Button>
    <Button color="secondary" onClick={() => deleteReport(report._id)} >Отклонить заявку</Button>
  </div>
  );
}

ReportCard.propTypes = {
  report: PropTypes.object.isRequired
};
