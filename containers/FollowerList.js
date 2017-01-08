import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadFollowers } from '../actions/followers'
import List from '../components/List'
import BriefUserItem from './BriefUserItem'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    },
    pagination: {
      followers: {
        fetchStatus,
        ids,
        failTimes
      }
    }
  } = state

  return {
    followers: ids.map(id => users[id]),
    fetchStatus,
    failTimes
  }
}

class FollowerList extends Component {
  componentWillMount() {
    if (this.shouldLoad(this.props)) {
      this.props.loadFollowers()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldLoad(nextProps))
      this.props.loadFollowers()
  }

  shouldLoad(props) {
    const { followers, fetchStatus, failTimes } = props
    return followers.length == 0
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
    const { renderUser, props: { followers } } = this;

    return (
      <div className={"followers"}>
        <div className={"title"}>
          <h3>关注列表</h3>
        </div>
        <List
          renderItem={renderUser}
          items={followers}
          className={"follower-list"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loadFollowers }
)(FollowerList)
