import * as action from '../../actions/postMoment'
import merge from 'lodash/merge'
import union from 'lodash/union'

const handlePostMomentSuccess = (state, action) => {
  return merge({}, state, {
    ids: union([action.response.result], state.ids)
  })
}

export const postMomentHandlers = {
  [action.POST_MOMENTS_SUCCESS]: handlePostMomentSuccess
}
