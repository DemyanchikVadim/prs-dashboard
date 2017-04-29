export const SET_REPORTS = 'SET_REPORTS';
export const LINK_DELETED = 'LINK_DELETED';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

/** Modal dialog actions **/
export const CLOSE_MODAL_DIALOG = 'CLOSE_MODAL_DIALOG';
export const OPEN_MODAL_DIALOG = 'OPEN_MODAL_DIALOG';

export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';

export function setReports() {
  return {
    type: SET_REPORTS,
  };
}

export const closeModal = () => ({
  type: CLOSE_MODAL_DIALOG,
});

export const openModal = modalConfig => ({
  type: OPEN_MODAL_DIALOG,
  modalConfig,
});

export function linkDeleted(linkId) {
  return {
    type: LINK_DELETED,
    linkId
  }
}

