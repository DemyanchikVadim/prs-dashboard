import { connect } from 'react-redux';
import { setReports, openModal, closeModal } from '../../actions/AppActions';

import { bindActionCreators } from 'redux';

import ReportsPage from '../../components/Reports/ReportsPage';

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

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);
