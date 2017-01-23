import merge from 'lodash/merge'
import actions from '../actions/actionTypes'
import { combineReducers } from 'redux'

const state = (state = {
  selectUserId: undefined,
  current: 'feeds',
  replyingMomentId: undefined
}, action) => {
  if (action.type == actions.SELECT_USER) {
    const { selectUserId } = action
    return merge({}, state, { selectUserId })
  } else if (action.type == actions.UPDATE_CURRENT_PAGE) {
    const { current } = action
    return merge({}, state, { current })
  } else if (action.type == actions.REPLY_MOMENT) {
    return merge({}, state, { replyingMomentId: action.momentId })
  } else {
    return state
  }
}

export default combineReducers({
  state
})
