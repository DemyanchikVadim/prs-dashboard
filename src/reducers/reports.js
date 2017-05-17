import { RECEIVE_REPORTS, REPORT_DELETED } from '../actions/AppActions';

export default function reports(state = [], action = 1 ) {
  console.log(action);
  switch (action.type) {
    case REPORT_DELETED:
      return state.filter(item => item._id !== action.reportId);

    case RECEIVE_REPORTS:
      return action.reports;

    default: return state;
  }
}
