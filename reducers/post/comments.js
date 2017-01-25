import action from '../../actions/actionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const deleteCommentReducer = (state, action) => {
  console.log('deleteCommentReducer');
  console.log(action);
  return state
}

export const postCommentReducers = {
  [action.DELETE_COMMENTS_SUCCESS]: deleteCommentReducer
}
