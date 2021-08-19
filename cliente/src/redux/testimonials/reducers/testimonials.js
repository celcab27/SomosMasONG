import { actionTestimonials } from 'redux/constants/constants'

const initialState = {
    testimonials: null
};

export default function testimonialsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTestimonials.GET_TESTIMONIALS:
            return {
                ...state,
                testimonials: payload
            }

        case actionTestimonials.ADD_TESTIMONIAL:
            state.testimonials.push(payload);
            return state

        case actionTestimonials.DELETE_TESTIMONIAL:
            const newState = state.testimonials.filter(item => item.id !== payload);
            return {
                ...state,
                testimonials: newState
            }

        default:
            return state
    }
}