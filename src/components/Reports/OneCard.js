import React from 'react';
import PropTypes from 'prop-types';

export default function ReportCard({report, openModal}) {
  return (
      <div className="card card-accent-primary">
        <div className="card-header"><b>Номер заявки: </b>1</div>
        <br />
        <img src={`data:image/jpeg;base64,${report.image}`} alt="das" />
        <div className="card-header"><b>Улица: </b>{report.description}</div>
        <br />
        <div className="card-header"><b>Пункт ПДД:dasd </b>123</div>
        <button
          className={`text-capitalize margin-left-5`}
          onClick={() => {
            openModal({
            });
          }
          }
        >
                </button>
      </div>
  );
}

ReportCard.propTypes = {
  report: PropTypes.object.isRequired
};
