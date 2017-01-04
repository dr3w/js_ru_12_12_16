import {DATE_FILTER} from '../constants'

export default (state = {
    from: null,
    to: null
}, action) => {
    const {type, payload} = action

    switch (type) {
        case DATE_FILTER :
            return payload
    }

    return state
}
