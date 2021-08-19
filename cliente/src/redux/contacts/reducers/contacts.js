import { actionContacts } from 'redux/constants/constants'

const initialState = {
    contacts: null
};

export default function contactsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionContacts.GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            }

        case actionContacts.DELETE_CONTACT:
            const newState = state.contacts.filter(item => item.id !== payload);
            return {
                ...state,
                contacts: newState
            }

        default:
            return state
    }
}