import React, { Component } from 'react'
import { connect } from 'react-redux'
import BriefUserItem from './BriefUserItem'
import * as status from '../reducers/paginate'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    }
  } = state

  return {
    user: users[currentUserId]
  }
}

class MyList extends Component {

  renderUser(user) {
    return (
      <BriefUserItem user={user} />
    )
  }

  render() {
    const { renderUser, props: { user } } = this
    // return empty unless user present
    if (typeof user === 'undefined') return null

    return (
      <div className={"followers"}>
        <div className={"title"}>
          <h3>我的</h3>
        </div>
        <ul className={"follower-list"}>
        { renderUser(user) }
        </ ul>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {  }
)(MyList)
