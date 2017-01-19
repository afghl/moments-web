import { CALL_API, GET, POST } from '../middleware/api'
import Schemas from '../schemas/index'
import merge from 'lodash/merge'
import { currentUserId } from '../globalData/index'

export const FOLLOWERS_REQUEST = 'FOLLOWERS_REQUEST'
export const FOLLOWERS_SUCCESS = 'FOLLOWERS_SUCCESS'
export const FOLLOWERS_FAILURE = 'FOLLOWERS_FAILURE'
export const UPDATE_FOLLOWERS_PARAMS = 'UPDATE_FOLLOWERS_PARAMS'

function fetchFollowers(params) {
  return {
    [CALL_API]: {
      method: GET,
      types: [ FOLLOWERS_REQUEST, FOLLOWERS_SUCCESS, FOLLOWERS_FAILURE ],
      endpoint: `users/${params.userId}/followers`,
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

export const FOLLOWS_REQUEST = 'FOLLOWS_REQUEST'
export const FOLLOWS_SUCCESS = 'FOLLOWS_SUCCESS'
export const FOLLOWS_FAILURE = 'FOLLOWS_FAILURE'

const postFollow = (params) => {
  return {
    [CALL_API]: {
      method: POST,
      types: [ FOLLOWS_REQUEST, FOLLOWS_SUCCESS, FOLLOWS_FAILURE ],
      endpoint: `users/${params.currentUserId}/followers`,
      params: params
    }
  }
}

// can be follow / unfollow
export const follow = (params) => {
  return (dispatch, getState) => {
    params = merge(params, { currentUserId })
    console.log(params);
    dispatch(postFollow(params))

    return Promise.resolve()
  }
}
