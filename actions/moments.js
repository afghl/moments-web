import { CALL_API, GET } from '../middleware/api'
import Schemas from '../schemas/index'
import merge from 'lodash/merge'

export const MOMENTS_REQUEST = 'MOMENTS_REQUEST'
export const MOMENTS_SUCCESS = 'MOMENTS_SUCCESS'
export const MOMENTS_FAILURE = 'MOMENTS_FAILURE'
export const UPDATE_MOMENTS_PARAMS = 'UPDATE_MOMENTS_PARAMS'

function fetchMoments(params) {
  return {
    [CALL_API]: {
      method: GET,
      types: [ MOMENTS_REQUEST, MOMENTS_SUCCESS, MOMENTS_FAILURE ],
      endpoint: `users/${params.userId}/moments`,
      schema: Schemas.MOMENT_ARRAY,
      params: params
    }
  }
}

export const loadMoments = () => {
  return (dispatch, getState) => {
    const { params } = getState().pagination.moments
    const userId = getState().page.state.selectUserId

    return dispatch(fetchMoments(merge(params, { userId })))
  }
}

export const updateMomentsParams = (params = {}) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_MOMENTS_PARAMS,
      params
    })

    return Promise.resolve()
  }
}
