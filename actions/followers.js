import { CALL_API, GET } from '../middleware/api'
import Schemas from '../schemas/index'

export const FOLLOWERS_REQUEST = 'FOLLOWERS_REQUEST'
export const FOLLOWERS_SUCCESS = 'FOLLOWERS_SUCCESS'
export const FOLLOWERS_FAILURE = 'FOLLOWERS_FAILURE'
export const UPDATE_FOLLOWERS_PARAMS = 'UPDATE_FOLLOWERS_PARAMS'

function fetchFollowers(params) {
  return {
    [CALL_API]: {
      method: GET,
      types: [ FOLLOWERS_REQUEST, FOLLOWERS_SUCCESS, FOLLOWERS_FAILURE ],
      endpoint: 'followers',
      schema: Schemas.USER_ARRAY,
      params: params
    }
  }
}

export const loadFollowers = () => {
  return (dispatch, getState) => {
    const { params } = getState().pagination.followers

    return dispatch(fetchFollowers(params))
  }
}
