import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import BriefUserItem from './BriefUserItem'

const mapStateToProps = (state, ownProps) => {

}

class FollowerList extends Component {

  renderUser(user) {
    return (
      <BriefUserItem
        user={user}
      />
    )
  }

  render() {
    const users = [
      {
        id: 1,
        name: 'hehe',
        avater: 'todo'
      },
      {
        id: 2,
        name: 'haha',
        avater: 'a?'
      }
    ]

    return (
      <div className={"followers"}>
        <div className={"title"}>
          <h3>关注列表</h3>
        </div>
        <List
          renderItem={this.renderUser}
          items={users}
          className={"follower-list"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {  }
)(FollowerList)
