import { call, put, takeEvery } from 'redux-saga/effects';

import {
  RECEIVE_REPORTS,
  SET_REPORTS
} from '../actions/AppActions';
import {
  fetchReports,
} from '../api/api';

function* loadReports() {
  try {
      const reports = yield call(fetchReports);
      yield put({ type: RECEIVE_REPORTS, reports });
  } catch (err) {
    console.log(err);
  }
}

function* appSaga() {
  yield takeEvery([SET_REPORTS], loadReports);
}

export default appSaga;
