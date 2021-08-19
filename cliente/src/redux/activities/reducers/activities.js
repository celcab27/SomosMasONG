import { actionActivities } from 'redux/constants/constants'

const initialState = {
    activities: null
};

export default function activitiesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionActivities.GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }

        case actionActivities.SET_ACTIVITY:
            state.activities.push(payload);
            return state
            
        case actionActivities.DELETE_ACTIVITY:
            const newState = state.activities.filter(item => item.id !== payload);
            return {
                ...state,
                activities: newState
            }
            
        default:
            return state
    }
}