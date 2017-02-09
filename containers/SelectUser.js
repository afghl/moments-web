import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentUserId } from '../globalData/index'
import List from '../components/List'
import values from 'lodash/values'

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
  constructor(props) {
    super(props)
    this.state = { focus: false }
    this.setFocus = this.setFocus.bind(this)
  }

  setFocus() {
    this.setState({focus: !this.state.focus})
  }

  renderUsers(user) {
    return (
      <li className="user-item">
        <a href={`/page?userId=${user.id}`}>
          <span className="user-avatar">
            <img src={user && user.avatar} />
          </span>
          <span className="user-name">
            {user && user.name}
          </span>
        </a>
      </li>
    )
  }

  render() {
    const { user, users } = this.props
    const { focus } = this.state

    return (
      <div className="select-user">
        <span>选择当前用户：</span>
        <div className="dropdown-box">
          <div className="current-user" onClick={this.setFocus}>
            <span className="user-avatar">
              <img src={user && user.avatar} />
            </span>
            <span className="user-name">
              {user && user.name}
            </span>
          </div>
          <List
            renderItem={this.renderUsers}
            items={values(users)}
            className={focus ? "dropdown-list" : "dropdown-list hidden"}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {}
)(SelectUser)
