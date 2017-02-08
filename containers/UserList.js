import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../actions/users'
import List from '../components/List'
import BriefUserItem from './BriefUserItem'
import * as status from '../reducers/paginate'
import { currentUserId } from '../globalData/index'
import pull from 'lodash/pull'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    },
    pagination: {
      users: {
        fetchStatus,
        ids,
        failTimes
      }
    }
  } = state

  pull(ids, currentUserId)

  return {
    users: ids.map(id => users[id]),
    fetchStatus,
    failTimes
  }
}

class UserList extends Component {
  componentWillMount() {
    if (this.shouldLoad(this.props)) {
      this.props.loadUsers()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldLoad(nextProps))
      this.props.loadUsers()
  }

  shouldLoad(props) {
    const { users, fetchStatus, failTimes } = props
    return users.length == 0
            && fetchStatus == status.PENDING
            && failTimes < 10
  }

  renderUser(user) {
    return (
      <BriefUserItem
        user={user}
      />
    )
  }

  render() {
    const { renderUser, props: { users } } = this;

    return (
      <div className={"followers block"}>
        <div className={"title"}>
          <h3>推荐关注</h3>
        </div>
        <List
          renderItem={renderUser}
          items={users}
          className={"follower-list"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(UserList)
