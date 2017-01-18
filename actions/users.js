import { CALL_API, GET } from '../middleware/api'
import Schemas from '../schemas/index'

export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'
export const UPDATE_USERS_PARAMS = 'UPDATE_USERS_PARAMS'

function fetchUsers(params) {
  return {
    [CALL_API]: {
      method: GET,
      types: [ USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE ],
      endpoint: 'users',
      schema: Schemas.USER_ARRAY,
      params: params
    }
  }
}

export const loadUsers = () => {
  return (dispatch, getState) => {
    const { params } = getState().pagination.users

    return dispatch(fetchUsers(params))
  }
}
