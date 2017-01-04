import {INCREMENT, DELETE_ARTICLE, INPUT_FILTER, DATE_FILTER} from '../constants'

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

export function filterByInput(filter) {
    return {
        type: INPUT_FILTER,
        payload: filter
    }
}

export function filterByDate(filter) {
    return {
        type: DATE_FILTER,
        payload: filter
    }
}
