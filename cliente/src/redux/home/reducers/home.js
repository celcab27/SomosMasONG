import { actionHome } from 'redux/constants/constants';

const initialState = {
  publicData: null,
  slider: null
};

export default function homeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionHome.GET_PUBLIC_DATA:
      return {
        ...state,
        publicData: payload
      }

    default:
      return state;
  }
}
