import axios from 'axios';
import { LINK_DELETED, SET_REPORTS } from '../constants/AppConstants';

export function setReports() {
  return {
    type: SET_REPORTS,
  };
}

export function linkDeleted(linkId) {
  return {
    type: LINK_DELETED,
    linkId
  }
}

export function deleteLink(id) {
  return dispatch => {
    return axios.delete(`/api/reports/${id}`)
      .then(data => dispatch(linkDeleted(id)));
  }
}

export const fetchReports = () => axios.get('/api/reports').then(res => res.data);
