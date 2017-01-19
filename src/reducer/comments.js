import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

export default (commentsState = new DefaultReducerState({}), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_COMMENTS + START:
            return commentsState.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return commentsState
              .mergeIn(['entities', payload.id], arrayToMap(response, CommentModel))
              .set('loading', false)
              .set('loaded', true)
              .set('error', null)

        case LOAD_COMMENTS + FAIL:
            return commentsState
              .set('loading', false)
              .set('error', error)
    }

    return commentsState
}
