import setAuthorizationToken from '../utils/setAuthorizationToken'
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const SET_REPORTS = 'SET_REPORTS';
export const LINK_DELETED = 'LINK_DELETED';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

/** Modal dialog actions **/
export const CLOSE_MODAL_DIALOG = 'CLOSE_MODAL_DIALOG';
export const OPEN_MODAL_DIALOG = 'OPEN_MODAL_DIALOG';

/** Reports actions **/
export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';

/** Auth actions **/

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

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    console.log("remove token")
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data)
      .then(res => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      })
  }
}

export function userSignupRequest(data) {
  return dispatch => {
    return axios.post('/api/users', data)
  }
}