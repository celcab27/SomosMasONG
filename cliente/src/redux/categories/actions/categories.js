import { actionCategories } from 'redux/constants/constants'

export const getCategories = (payload) => {
    return {
        type: actionCategories.GET_CATEGORIES,
        payload
    }
}

export const addCategory = (payload) => {
    return {
        type: actionCategories.ADD_CATEGORY,
        payload
    }
}