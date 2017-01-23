import merge from 'lodash/merge'
import * as followerAction from './followers'
import * as momentsAction from './moments'
import * as postMomentAction from './postMoment'
import * as pageAction from './page'
import * as feedsAction from './feeds'
import * as usersAction from './users'
import * as replyAction from './reply'
import * as postCommentAction from './postComment'

const actions = {}
merge(actions, followerAction)
merge(actions, momentsAction)
merge(actions, postMomentAction)
merge(actions, pageAction)
merge(actions, feedsAction)
merge(actions, usersAction)
merge(actions, replyAction)
merge(actions, postCommentAction)

export default actions
