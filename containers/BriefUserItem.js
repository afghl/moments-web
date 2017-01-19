import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/page'
import { loadMoments, updateMomentsParams } from '../actions/moments'
import { updateCurrentPage } from '../actions/page'
import { follow } from '../actions/followers'
import includes from 'lodash/includes'

const mapStateToProps = (state, ownProps) => {
  const { selectUserId } = state.page.state
  const { ids } = state.pagination.followers

  return {
    selectUserId,
    followerIds: ids
  }
}

class BriefUserItem extends Component {
  constructor(props) {
    super(props)
    this.selectItem = this.selectItem.bind(this)
    this.renderFollow = this.renderFollow.bind(this)
    this.onClickFollow = this.onClickFollow.bind(this)
  }

  selectItem() {
    const {
      user: { id },
      selectUser,
      loadMoments,
      updateMomentsParams,
      updateCurrentPage
     } = this.props

    selectUser(id)
      .then(updateMomentsParams)
      .then(loadMoments)
      .then(() => { updateCurrentPage('user_moment') })
  }

  renderFollow() {
    const className = this.isFollowing() ? 'follow-span follow' : 'follow-span unfollow'
    const text = this.isFollowing() ? '取关' : '关注'

    return (
      <span className={className} onClick={this.onClickFollow}>{text}</ span>
    )
  }

  isFollowing() {
    const { user: { id }, followerIds } = this.props
    includes(followerIds, id)
  }

  onClickFollow() {
    
  }

  render() {
    const { user: { id, avatar, name }, selectUserId, title } = this.props
    const highLight = id == selectUserId ? 'high-light' : ''
    const className = `brief-user-item ${highLight}`

    return (
      <li className={className} onClick={this.selectItem}>
        { this.renderFollow() }
        <div className="avatar"><img src={avatar}/></div>

        <p className="name">{title || name}</p>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  { selectUser,
    loadMoments,
    updateMomentsParams,
    updateCurrentPage,
    follow
  }
)(BriefUserItem)
