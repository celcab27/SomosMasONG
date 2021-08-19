import { actionContacts } from 'redux/constants/constants'

export const getContacts = (payload) => {
    return {
        type: actionContacts.GET_CONTACTS,
        payload
    }
}

export const removeContacts = (id) => {
    return {
        type: actionContacts.DELETE_CONTACT,
        payload: id
    }
}