import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
}

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
          <div className="comments">点赞和评论区域</div>
        </div>
        <div className="border"></div>
      </li>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   {  }
// )(BriefUserItem)

export default MomentItem
