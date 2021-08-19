import { actionUsers } from 'redux/constants/constants';

export const getUsers = (payload) => {
    return{
        type: actionUsers.GET_USERS,
        payload
    }
}

export const removeUser = (id) => {
    return {
        type: actionUsers.DELETE_USER,
        payload: id
    }
}