import React from 'react';
import PropTypes from 'prop-types';
import ReportGard from './ReportCard';

export default function ReportsList({ reports, deleteReport, openModal, modalConfig }) {
  const emptyMessage = (
    <p>Заявки отсуствуют</p>
  );

  const reportsList = (
    <div className="col-sm-6 col-md-4">
      { reports.map(report => <ReportGard report={report} key={report._id} deleteReport={deleteReport} openModal={openModal} modalConfig={modalConfig} />) }
    </div>
  );

  return (
    <div>
      { reports.length === 0 ? emptyMessage : reportsList }
    </div>
  );
}

ReportsList.propTypes = {
  reports: PropTypes.array.isRequired,
};
