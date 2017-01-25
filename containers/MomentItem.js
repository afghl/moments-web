import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReplyPanel from './ReplyPanel'
import filter from 'lodash/filter'
import CommentList from './CommentList'
import moment from 'moment'
import { replyMoment } from '../actions/reply'
import { postComment, deleteComment } from '../actions/postComment'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const { replyingMomentId } = state.page.state
  const entities = state.entities.comments
  const comments = filter(entities, c => c.moment == ownProps.moment.id)

  return { replyingMomentId, comments }
}

class MomentItem extends Component {
  constructor(props) {
    super(props)
    this.onClickReply = this.onClickReply.bind(this)
    this.onClickLike = this.onClickLike.bind(this)
  }

  onClickReply() {
    const { replyMoment, moment: { id } } = this.props
    replyMoment(id)
  }

  onClickLike() {
    const { postComment, deleteComment, moment: { id } } = this.props
    const userLikeComment = this.userLikeComment()

    if (typeof userLikeComment == 'undefined') {
      postComment({
        type: 2,
        momentId: id
      })
    } else {
      deleteComment({
        momentId: id,
        commentId: userLikeComment.id
      })
    }
  }

  renderReplyPanel() {
    const { replyingMomentId, moment } = this.props
    if (replyingMomentId != moment.id) return

    return (
      <div className="reply">
        <ReplyPanel moment={moment} />
      </div>
    )
  }

  // TODO: refactor momentitem and comment list, move operations list into comment list
  userLikeComment() {
    const { comments } = this.props
    return filter(comments, c => c.type == 2 && c.userId == currentUserId)[0]
  }

  renderOperations() {
    const { onClickReply, onClickLike } = this
    let likeClasses = 'icon icon-like'
    if (this.userLikeComment()) likeClasses += ' like'

    return (
      <ul className="operations">
        <li onClick={onClickReply}>
          <span className="icon icon-reply"></span>
        </li>
        <li className="like-container" onClick={onClickLike}>
          <span className={likeClasses}>
          </span>
        </li>
      </ul>
    )
  }

  render() {

    const { body, user, createdAt } = this.props.moment
    const time = moment(createdAt).fromNow()

    return (
      <li className="moment">
        <div className="inner">
          <p className="userName">{user.name}</p>
          <p className="body">{body}</p>
          <p className="timestamp">{time}</p>
        </div>
        { this.renderOperations() }
        <CommentList comments={this.props.comments}/>
        { this.renderReplyPanel() }
        <div className="border"></div>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  { replyMoment, postComment, deleteComment }
)(MomentItem)
