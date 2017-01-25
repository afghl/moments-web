import action from '../../actions/actionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const deleteCommentReducer = (state, action) => {
  const { params: { commentId } } = action
  let comment = state.comments[commentId]

  comment = merge({}, comment, { '_delete': true })
  state.comments[commentId] = comment

  return state
}

export const postCommentReducers = {
  [action.DELETE_COMMENTS_SUCCESS]: deleteCommentReducer
}
