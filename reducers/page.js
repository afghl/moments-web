import merge from 'lodash/merge'
import actions from '../actions/actionTypes'
import { combineReducers } from 'redux'

const state = (state = {
  selectUserId: undefined,
  current: 'feeds'
}, action) => {
  if (action.type == actions.SELECT_USER) {
    const { selectUserId } = action
    return merge({}, state, { selectUserId })
  } else if (action.type == actions.UPDATE_CURRENT_PAGE) {
    const { current } = action
    const newState = merge({}, state, {
      current
    })
    if (current == 'feeds') newState.selectUserId = undefined
    return newState
  } else {
    return state
  }
}

export default combineReducers({
  state
})
