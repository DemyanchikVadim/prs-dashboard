import { connect } from 'react-redux';
import React from 'react';
import ReportsList from '../../components/Reports/One';
import { setReports } from '../../actions/AppActions';
import { bindActionCreators } from 'redux';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }

  render() {
    return (
      <div>
        <ReportsList reports={this.props.reports}/>
      </div>
    );
  }
}

ReportsPage.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setReports,
  }, dispatch),
});

function mapStateToProps(state) {
  return {
    reports: state.reports
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);
