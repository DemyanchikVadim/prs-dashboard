import {
  OPEN_MODAL_DIALOG,
  CLOSE_MODAL_DIALOG,
} from '../../constants/AppConstants';

const modalDialog = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL_DIALOG:
      return action.modalConfig;
    case CLOSE_MODAL_DIALOG:
      return {};
    default:
      return state;
  }
};

export default modalDialog;
