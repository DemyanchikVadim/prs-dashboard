import React from 'react';
import ReportGard from './OneCard';

export default function One({ reports, deleteLink }) {
  const emptyMessage = (
    <p>There is no reports yet</p>
  );

  const reportsList = (
    <div className="col-sm-6 col-md-4">
      { reports.map(report => <ReportGard report={report} key={report._id} deleteLink={deleteLink}/>) }
    </div>
  );

  return (
    <div>
      { reports.length === 0 ? emptyMessage : reportsList }
    </div>
  );
}

One.propTypes = {
  reports: React.PropTypes.array.isRequired,
};
