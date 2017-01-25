import merge from 'lodash/merge'
import values from 'lodash/values'
import mapValues from 'lodash/mapValues'
// import * as action from '../actions/actionTypes'
import { postCommentReducers } from './post/comments'

const extendReducers = {}
merge(extendReducers, postCommentReducers)

const handleMore = (state, action) => {
  return extendReducers[action.type](state, action)
}

const hasMore = (type) => {
  return typeof extendReducers[type] === 'function'
}

// Updates an entity cache in response to any action with response.entities.
export default function entities(state = {
  users: {}
}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  } else if (hasMore(action.type)) {
    return handleMore(state, action)
  } else {
    return state
  }
}
