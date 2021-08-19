import { actionUser } from 'redux/constants/constants';

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, { type, data }) {
  switch (type) {
    case actionUser.USER_LOGOUT:
      return {
        ...state,
        ...initialState,
      };
      case actionUser.GET_LOGGED:
        return {
          ...state,
          user: data
        }
    default:
      return state;
  }
}
