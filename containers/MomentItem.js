import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReplyPanel from './ReplyPanel'
import CommentList from './CommentList'
import moment from 'moment'


class MomentItem extends Component {
  constructor(props) {
    super(props)
    this.onClickReply = this.onClickReply.bind(this)
    this.onClickLike = this.onClickLike.bind(this)
    this.state = { reply: false }
  }

  onClickReply() {
    this.setState({ reply: !this.state.reply })
  }

  onClickLike() {

  }

  renderReplyPanel() {
    if (!this.state.reply) return null
    const { moment } = this.props

    return (
      <div className="reply">
        <ReplyPanel moment={moment} />
      </div>
    )
  }

  render() {
    const { onClickReply, onClickLike } = this
    moment.locale('zh-cn')
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
          <li onClick={onClickReply}><span className="icon icon-reply"></span></li>
          <li className="like-container" onClick={onClickLike}><span className="icon icon-like"></span></li>
        </ul>
        <CommentList moment={this.props.moment}/>
        { this.renderReplyPanel() }
        <div className="border"></div>
      </li>
    )
  }
}

export default MomentItem
