import React from 'react';
//import ReportsList from '../../components/Reports/One';
import ReportsTable from './ReportsTable';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }
  render() {
    const { actions} = this.props;
    return (
      <div className="row content">
        <ReportsTable reports={this.props.reports} openModal={actions.openModal}/>
      </div>
    );
  }
}

export default ReportsPage;
