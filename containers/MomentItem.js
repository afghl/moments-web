import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReplyPanel from './ReplyPanel'
import filter from 'lodash/filter'
import CommentList from './CommentList'
import moment from 'moment'
import { replyMoment } from '../actions/reply'
import { postComment } from '../actions/postComment'

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
    const { postComment, moment: { id } } = this.props

    postComment({
      type: 2,
      momentId: id
    })
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

  render() {
    const { onClickReply, onClickLike } = this
    const { body, user, createdAt } = this.props.moment
    const time = moment(createdAt).fromNow()

    return (
      <li className="moment">
        <div className="inner">
          <p className="userName">{user.name}</p>
          <p className="body">{body}</p>
          <p className="timestamp">{time}</p>
        </div>
        <ul className="oprations">
          <li onClick={onClickReply}>
            <span className="icon icon-reply"></span>
          </li>
          <li className="like-container" onClick={onClickLike}>
            <span className="icon icon-like"></span>
          </li>
        </ul>
        <CommentList comments={this.props.comments}/>
        { this.renderReplyPanel() }
        <div className="border"></div>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  { replyMoment, postComment }
)(MomentItem)
