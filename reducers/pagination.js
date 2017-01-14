import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import paginate from './paginate'
import actions from '../actions/actionTypes'
import * as status from './paginate'
import { handlers } from './post/moments'

const defaultHandle = (state, action) => {
  return Object.assign({}, state, {
    params: merge({}, state.params, action.params),
    ids: [],
    page: 1,
    fetchStatus: status.PENDING
  })
}

// TODO: avoid hardcoding userId in defaultParams.
export default combineReducers({
  followers: paginate({
    types: [
      actions.FOLLOWERS_REQUEST,
      actions.FOLLOWERS_SUCCESS,
      actions.FOLLOWERS_FAILURE
    ],
    defaultParams: { userId: 1 },
    more: {
      [actions.UPDATE_FOLLOWERS_PARAMS]: defaultHandle
    }
  }),
  moments: paginate({
    types: [
      actions.MOMENTS_REQUEST,
      actions.MOMENTS_SUCCESS,
      actions.MOMENTS_FAILURE
    ],
    defaultParams: { userId: 1 },
    more: {
      [actions.UPDATE_MOMENTS_PARAMS]: defaultHandle
    }
  }),
  feeds: paginate({
    types: [
      actions.FEEDS_REQUEST,
      actions.FEEDS_SUCCESS,
      actions.FEEDS_FAILURE
    ],
    defaultParams: { userId: 1 },
    // TODO: handle last id.
    more: merge(handlers, {
      [actions.UPDATE_FOLLOWERS_PARAMS]: defaultHandle
    })
  })
})
