import { actionHome } from 'redux/constants/constants';

export const getPublicData = (payload) => {
  return {
    type: actionHome.GET_PUBLIC_DATA,
    payload
  };
};

