import { CALL_API, GET } from '../middleware/api'
import Schemas from '../schemas/index'
import { currentUserId } from '../globalData/index'
import merge from 'lodash/merge'

export const FEEDS_REQUEST = 'FEEDS_REQUEST'
export const FEEDS_SUCCESS = 'FEEDS_SUCCESS'
export const FEEDS_FAILURE = 'FEEDS_FAILURE'
export const UPDATE_FEEDS_PARAMS = 'UPDATE_FEEDS_PARAMS'

function fetchFeeds(params) {
  return {
    [CALL_API]: {
      method: GET,
      types: [ FEEDS_REQUEST, FEEDS_SUCCESS, FEEDS_FAILURE ],
      endpoint: `users/${params.userId}/feeds`,
      schema: Schemas.MOMENT_ARRAY,
      params: params
    }
  }
}

export const loadFeeds = () => {
  return (dispatch, getState) => {
    const { params } = getState().pagination.feeds
    const userId = currentUserId

    return dispatch(fetchFeeds(merge(params, { userId })))
  }
}
