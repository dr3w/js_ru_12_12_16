import { INPUT_FILTER } from '../constants'

export default (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case INPUT_FILTER:
            return payload
    }

    return state
}
