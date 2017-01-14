import * as action from '../../actions/postMoment'


const handlePostMomentSuccess = (state, action) => {
  // TODO: update feed.
  console.log('handlePostMomentSuccess capture a success!!');
  return state
}

export const handlers = {
  [action.POST_MOMENTS_SUCCESS]: handlePostMomentSuccess
}
