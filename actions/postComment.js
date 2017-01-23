import { CALL_API, POST } from '../middleware/api'
import Schemas from '../schemas/index'
import { currentUserId } from '../globalData/index'
import merge from 'lodash/merge'

export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST'
export const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS'
export const POST_COMMENTS_FAILURE = 'POST_COMMENTS_FAILURE'

const sendComment = (params) => {
  return {
    [CALL_API]: {
      method: POST,
      types: [ POST_COMMENTS_REQUEST, POST_COMMENTS_SUCCESS, POST_COMMENTS_FAILURE ],
      endpoint: `moments/${params.momentId}/comments`,
      schema: Schemas.COMMENT,
      params: params
    }
  }
}

// type, momentId, userId, (otherId), body
export const postComment = (params) => {
  return (dispatch, getState) => {
    params = merge(params, { userId: currentUserId })
    dispatch(sendComment(params))
    return Promise.resolve()
  }
}
