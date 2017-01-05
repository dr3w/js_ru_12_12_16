import {FILTER_DATE, FILTER_TITLE} from '../constants'

export default (filterState = {
    date: {
        from: null,
        to: null
    },
    title: []
}, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_DATE:
            return Object.assign({}, filterState, {date: payload.date || {from: null, to: null}})
            break

        case FILTER_TITLE:
            return Object.assign({}, filterState, {title: payload.title})
            break

        default:
            return filterState
    }

}
