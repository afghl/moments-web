import React, { Component } from 'react'
import { connect } from 'react-redux'
import BriefUserItem from './BriefUserItem'
import * as status from '../reducers/paginate'
import { currentUserId } from '../globalData/index'
import { updateCurrentPage } from '../actions/page'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    },
    page: { state: { current } }
  } = state

  return {
    user: users[currentUserId],
    current
  }
}

class MyList extends Component {

  constructor(props) {
    super(props)
    this.renderFeedItem = this.renderFeedItem.bind(this)
    this.selectFeed = this.selectFeed.bind(this)
  }

  renderUser(user) {
    return (
      <BriefUserItem user={user} title={"moments"} />
    )
  }

  renderFeedItem() {
    const highLight = this.props.current == "feeds" ? 'high-light' : ''
    const className = `brief-user-item ${highLight}`

    return (
      <li className={className} onClick={this.selectFeed}>
        <div className="avatar"><img/></div>

        <p className="name">我的 timeline</p>
      </li>
    )
  }

  selectFeed() {
    this.props.updateCurrentPage('feeds')
  }

  render() {
    const {
      renderUser, renderFeedItem,
      props: { user }
    } = this
    // return empty unless user present
    if (typeof user === 'undefined') return null

    return (
      <div className={"followers"}>
        <div className={"title"}>
          <h3>我的</h3>
        </div>
        <ul className={"follower-list"}>
          { renderUser(user) }
          { renderFeedItem() }
        </ ul>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { updateCurrentPage }
)(MyList)