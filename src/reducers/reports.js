import { RECEIVE_REPORTS, LINK_DELETED } from '../actions/AppActions';

export default function reports(state = [], action = 1 ) {
  console.log(action);
  switch (action.type) {
    case LINK_DELETED:
      return state.filter(item => item._id !== action.linkId);

    case RECEIVE_REPORTS:
      return action.reports;

    default: return state;
  }
}
