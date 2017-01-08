import merge from 'lodash/merge'
import values from 'lodash/values'
import mapValues from 'lodash/mapValues'

// Updates an entity cache in response to any action with response.entities.
export default function entities(state = {
  users: {}
}, action) {
  if (action.response == undefined || action.response.entities == undefined) {
    return state
  }

  return merge({}, state, action.response.entities)
}
