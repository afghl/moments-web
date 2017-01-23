import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import moment from 'moment'

class MomentItem extends Component {

  render() {
    moment.locale('zh-cn')
    const { body, user, createdAt } = this.props.moment
    const time = moment(createdAt).fromNow()

    return (
      <li className="moment">
        <div className="inner">
          <p className="userName">{user.name}</p>
          <p className="body">{body}</p>
          <p className="timestamp">{time}</p>
          <CommentList />
        </div>
        <div className="border"></div>
      </li>
    )
  }
}

export default MomentItem
