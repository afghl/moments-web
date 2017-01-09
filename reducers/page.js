import merge from 'lodash/merge'
import * as actions from '../actions/selectUser'
import { combineReducers } from 'redux'

const state = (state = {
  selectUserId: undefined
}, action) => {
  if (action.type == actions.SELECT_USER) {
    const { selectUserId } = action

    return merge({}, state, { selectUserId })
  } else {
    return state
  }
}

export default combineReducers({
  state
})
