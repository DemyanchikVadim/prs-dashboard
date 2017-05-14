import { combineReducers } from 'redux';
import reports from './reports';
import modalDialog from './modalDialog';
import auth from './auth';
import flashMessages from './flashMessages';

export default combineReducers({
  reports,
  modalDialog,
  auth,
  flashMessages,
});
