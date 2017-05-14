import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default function ReportCard({report, openModal}) {
  return (
  <div className="card report">
    <div className="card-header">
      Номер заявки:
      <span className="badge badge-success float-right">Активная</span>
    </div>
      <div className="card-block">
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
      Описание
    </div>
    <Button color="primary" >Вызвать эвакуатор</Button>
    <Button color="secondary" >Отклонить заявку</Button>
  </div>
  );
}

ReportCard.propTypes = {
  report: PropTypes.object.isRequired
};
