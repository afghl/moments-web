import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    },
  } = state

  return {
    user: users[currentUserId],
    users
  }
}

class SelectUser extends Component {
  render() {
    const { user, users } = this.props

    return (
      <div className="select-user">
        <span>选择当前用户：</span>
        <div className="dropdown-box">
          <div className="current-user">
            <span className="user-avatar">
              <img src={user && user.avatar} />
            </span>
            <span className="user-name">
              {user && user.name}
            </span>
            <span className="dropdown-icon">

            </span>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {}
)(SelectUser)
