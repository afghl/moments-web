import merge from 'lodash/merge'
import * as followerAction from './followers'
import * as momentsAction from './moments'
import * as postMomentAction from './postMoment'
import * as selectUserAction from './selectUser'
import * as feedsAction from './feeds'

const actions = {}
merge(actions, followerAction)
merge(actions, momentsAction)
merge(actions, postMomentAction)
merge(actions, selectUserAction)
merge(actions, feedsAction)

export default actions
