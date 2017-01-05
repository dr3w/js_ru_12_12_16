import {INCREMENT, DELETE_ARTICLE, FILTER_TITLE, FILTER_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function filterByTitle(title) {
    return {
        type: FILTER_TITLE,
        payload: {title}
    }
}

export function filterByDate(date) {
    return {
        type: FILTER_DATE,
        payload: {date}
    }
}
