import * as action from '../../actions/postMoment'
import merge from 'lodash/merge'
import union from 'lodash/union'

const handleFollowSuccess = (state, action) => {
  return merge({}, state, {
    ids: union([action.response.result], state.ids)
  })
}

export const followSuccessHandler = {
  [action.FOLLOWS_SUCCESS]: handleFollowSuccess
}
