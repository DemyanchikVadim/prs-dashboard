import React from 'react';
import ReportsList from '../../components/Reports/ReportsList';
import Modal from '../../components/Modal/Modal';
import { connect } from 'react-redux';
import { setReports, openModal, closeModal } from '../../actions/AppActions';

import { bindActionCreators } from 'redux';

class ReportsInvalid extends React.Component {

  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }

  render() {
    const { modalConfig } = this.props;
    const { openModal, closeModal } = this.props.actions;
    return (
      <div className="row content">
        <ReportsList reports={this.props.reports} openModal={openModal} />
        <Modal modalConfig={modalConfig} closeModal={closeModal} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setReports,
    openModal,
    closeModal
  }, dispatch),
});

function mapStateToProps(state) {
  return {
    reports: state.reports,
    modalConfig: state.modalDialog,
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ReportsInvalid)
