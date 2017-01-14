import { get } from './api/get'
import { post } from './api/post'

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')
export const GET = Symbol('Get')
export const POST = Symbol('Post')
export const API_ROOT = 'http://localhost:3000/api/'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types, params, method } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  // post api doesnt need schema
  if (!schema && typeof method == GET) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types

  next(actionWith({ type: requestType }))
  if (typeof callAPI === 'undefined' && typeof callAPI === 'undefined') {
    return next(action)
  }

  const api = method == GET ? get : post

  return api(endpoint, params, schema).then(
    response => {
      next(actionWith({
        type: successType,
        response
      }))
    },
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
