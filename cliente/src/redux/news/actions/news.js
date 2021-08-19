import { actionNews } from 'redux/constants/constants'

export const getNews = (payload) => {
    return {
        type: actionNews.GET_NEWS,
        payload
    }
}

export const addNews = (payload) => {
    return{
        type: actionNews.ADD_NEWS,
        payload
    }
}

export const deleteNews = (id) => {
    return{
        type: actionNews.DELETE_NEWS,
        payload: id
    }
}