import forOwn from 'lodash/forOwn'
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:9090/'

const getFullUrl = (endpoint, params) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  let paramString = ''

  forOwn(params, (v, k) => { paramString += `&${k}=${v}` })
  return `${fullUrl}?${paramString}`
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function get(endpoint, params, schema) {
  const fullUrl = getFullUrl(endpoint, params)
  return fetch(fullUrl
    ).then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
      const flat = normalize(camelizedJson.items, schema)

      delete camelizedJson.items

      return Object.assign({}, flat, { info: camelizedJson })
    })
}
