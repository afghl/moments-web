import action from '../actions/actionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'
import without from 'lodash/without'
import omit from 'lodash/omit'

const handlerUpdateFollowerList = (state, action) => {
  const { actionType, userId } = action
  let { ids } = state

  if (actionType == 'follow') {
    // add to follower list
    ids = union([userId], state.ids)
  } else if (actionType == 'unfollow') {
    // remove from follower list
    ids = without(state.ids, userId)
  }
  
  // TODO: use more elegant lodash api.
  return merge({}, omit(state, 'ids'), { ids })
}

export const updateListReducers = {
  [action.UPDATE_FOLLOWERS_LIST]: handlerUpdateFollowerList
}
