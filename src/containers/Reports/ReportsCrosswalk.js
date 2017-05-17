import React from 'react';
import ReportsList from '../../components/Reports/ReportsList';
import Modal from '../../components/Modal/Modal';
import { connect } from 'react-redux';
import { setReports, openModal, closeModal, deleteReport } from '../../actions/AppActions';

import { bindActionCreators } from 'redux';

class ReportsPage extends React.Component {

  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }

  render() {
    const { modalConfig } = this.props;
    const { openModal, closeModal, deleteReport } = this.props.actions;
    return (
      <div className="row content">
        <ReportsList reports={this.props.reports} openModal={openModal} deleteReport={deleteReport} />
        <Modal modalConfig={modalConfig} closeModal={closeModal} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setReports,
    openModal,
    closeModal,
    deleteReport,
  }, dispatch),
});

function mapStateToProps(state) {
  return {
    reports: state.reports,
    modalConfig: state.modalDialog,
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ReportsPage)
