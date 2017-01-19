import forOwn from 'lodash/forOwn'
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import { API_ROOT } from '../api'

export function post(endpoint, params, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl, {
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      // when schema is not defined, no response is expected.
      if (typeof schema == 'undefined') {
        return {}
      }

      const camelizedJson = camelizeKeys(json)
      const flat = normalize(camelizedJson.items, schema)

      delete camelizedJson.items

      return Object.assign({}, flat, { info: camelizedJson })
    })
}
