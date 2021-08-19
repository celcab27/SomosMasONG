import { actionUsers } from 'redux/constants/constants'

const initialState = {
    users: null
};

export default function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionUsers.GET_USERS:
            return {
                ...state,
                users: payload
            }

        case actionUsers.DELETE_USER:
            const newState = state.users.filter(item => item.id !== payload);
            return {
                ...state,
                users: newState
            }
        default:
            return state
    }
}