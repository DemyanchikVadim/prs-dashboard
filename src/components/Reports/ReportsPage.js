import React from 'react';
//import ReportsList from '../../components/Reports/One';
import ReportsTable from './ReportsTable';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }
  render() {
    const { actions, modalConfig } = this.props;
    return (
      <div className="row content">
        <ReportsTable reports={this.props.reports} openModal={actions.openModal}/>
      </div>
    );
  }
}

ReportsPage.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

export default ReportsPage;
