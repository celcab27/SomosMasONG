import { actionNews } from 'redux/constants/constants'

const initialState = {
    news: null
};

export default function newsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionNews.GET_NEWS:
            return {
                ...state,
                news: payload
            }

        case actionNews.ADD_NEWS:
            state.news.push(payload);
            return state

        case actionNews.DELETE_NEWS:
            const newState = state.news.filter(item => item.id !== payload);
            return{
                ...state,
                news: newState
            }
            
        default:
            return state
    }
}