import { combineReducers } from 'redux';
import reports from './reports';
import modalDialog from './modalDialog/modalDialog';

export default combineReducers({
  reports,
  modalDialog,
});
