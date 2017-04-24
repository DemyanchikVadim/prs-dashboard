import React from 'react';

export default function ReportCard({report}) {
  return (
      <div className="card card-accent-primary">
        <div className="card-header"><b>Номер заявкиdsasdsada: </b>1</div>
        <br />
        <img src={`data:image/jpeg;base64,${report.image}`} alt="das" />
        <div className="card-header"><b>Улица: </b>{report.description}</div>
        <br />
        <div className="card-header"><b>Пункт ПДД:dasd </b>123</div>
      </div>
  );
}

ReportCard.propTypes = {
  report: React.PropTypes.object.isRequired
};
