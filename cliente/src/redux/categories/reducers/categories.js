import { actionCategories } from 'redux/constants/constants'

const initialState = {
    categories: null
};

export default function categoriesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionCategories.GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }

        case actionCategories.ADD_CATEGORY:
            state.categories.push(payload)
            return state
            
        default:
            return state
    }
}