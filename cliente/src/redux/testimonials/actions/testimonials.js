import { actionTestimonials } from 'redux/constants/constants'

export const getTestimonials = (payload) => {
    return {
        type: actionTestimonials.GET_TESTIMONIALS,
        payload
    }
}

export const addTestimonial = (payload) => {
    return {
        type: actionTestimonials.ADD_TESTIMONIAL,
        payload
    }
}

export const removeTestimonial = (id) => {
    return {
        type: actionTestimonials.DELETE_TESTIMONIAL,
        payload: id
    }
}