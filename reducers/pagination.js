import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import paginate from './paginate'
import * as followersActions from '../actions/followers'
import * as momentsActions from '../actions/moments'
import * as status from './paginate'

const defaultHandle = (state, action) => {
  return Object.assign({}, state, {
    params: merge({}, state.params, action.params),
    ids: [],
    page: 1,
    fetchStatus: status.PENDING
  })
}

export default combineReducers({
  followers: paginate({
    types: [
      followersActions.FOLLOWERS_REQUEST,
      followersActions.FOLLOWERS_SUCCESS,
      followersActions.FOLLOWERS_FAILURE,
    ],
    defaultParams: { userId: 1 },
    more: {
      [followersActions.UPDATE_SHOTS_PARAMS]: defaultHandle
    }
  }),
  moments: paginate({
    types: [
      momentsActions.MOMENTS_REQUEST,
      momentsActions.MOMENTS_SUCCESS,
      momentsActions.MOMENTS_FAILURE,
    ],
    defaultParams: { userId: 1 },
    more: {
      [momentsActions.UPDATE_MOMENTS_PARAMS]: defaultHandle
    }
  }),
})
