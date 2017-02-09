import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import * as status from '../reducers/paginate'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import union from 'lodash/union'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const {
    pagination: {
      followers: {
        ids,
      }
    }
  } = state

  return { followerIds: ids }
}

class CommentList extends Component {

  renderLike(like) {
    return (
      <li className="likes-item">
        <img src={like.userAvatar}/>
      </li>
    )
  }

  renderTalk(talk) {
    return (
      <li className="talks-item">
        <p>
          <span className="replier">
            {talk.userName}
          </span>
          { !isEmpty(talk.otherName) ?
              (<span className="replier other">{talk.otherName}</span>) : ('')
          }
          ：
          {talk.body}
        </p>
      </li>
    )
  }

  filterUnfollowedComments(comments) {
    let ids = this.props.followerIds
    ids = union(ids, [currentUserId])

    return filter(comments, c => {
      const followedReplier = includes(ids, c.userId)
      const hasOtherReplier = !!c.otherId
      const followedOther = includes(ids, c.otherId)
      return followedReplier && (!!hasOtherReplier && followedOther || !hasOtherReplier)
    })
  }

  render() {
    const { renderLike, renderTalk } = this
    let { comments } = this.props
    comments = this.filterUnfollowedComments(comments)
    const talks = filter(comments, c => c.type == 1)
    const likes = filter(comments, c => c.type == 2)

    if (comments.length == 0)
      return (
        <div></div>
      )
    return (
      <div className="comments">
        <List
          renderItem={renderLike}
          items={likes}
          className={"comments-likes"}
        />
        <List
          renderItem={renderTalk}
          items={talks}
          className={"comments-talks"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(CommentList)
