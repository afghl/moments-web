import { CALL_API, POST } from '../middleware/api'
import Schemas from '../schemas/index'
import { currentUserId } from '../globalData/index'
import merge from 'lodash/merge'

export const POST_MOMENTS_REQUEST = 'POST_MOMENTS_REQUEST'
export const POST_MOMENTS_SUCCESS = 'POST_MOMENTS_SUCCESS'
export const POST_MOMENTS_FAILURE = 'POST_MOMENTS_FAILURE'

const sendMoment = (params) => {
  return {
    [CALL_API]: {
      method: POST,
      types: [ POST_MOMENTS_REQUEST, POST_MOMENTS_SUCCESS, POST_MOMENTS_FAILURE ],
      endpoint: `users/${params.userId}/moments`,
      schema: Schemas.MOMENT,
      params: params
    }
  }
}
export const postMoment = (params) => {
  return (dispatch, getState) => {
    const params = merge(params, { userId: currentUserId })
    
    dispatch(sendMoment(params))

    return Promise.resolve()
  }
}
