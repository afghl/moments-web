import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser, updateCurrentPage } from '../actions/page'
import { loadMoments, updateMomentsParams } from '../actions/moments'
import { follow, updateFollowerList } from '../actions/followers'
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

    if (this.isFollowing()) {
      return (
        <button type="button" className="following" onClick={this.onClickFollow}>
          <div className="following-text"></div>
        </button>
      )
    } else {
      return (
        <button type="button" onClick={this.onClickFollow}>
          <div className="follow-text">
            关注
          </div>
        </button>
      )
    }
  }

  isFollowing() {
    const { user: { id }, followerIds } = this.props
    return includes(followerIds, id)
  }

  // TODO: should probably extract to a single container.
  onClickFollow(e) {
    e.preventDefault();
    e.stopPropagation();

    const {
      user: { id },
      follow,
      updateFollowerList
    } = this.props

    const type = this.isFollowing() ? 'unfollow' : 'follow'

    follow({type, followerId: id}).then(() => {
      updateFollowerList({
        userId: id,
        action: type
      })
    })
  }

  render() {
    const { user: { id, avatar, name }, selectUserId, title } = this.props
    const highLight = id == selectUserId ? 'high-light' : ''
    const className = `brief-user-item ${highLight}`

    return (
      <li className={className} onClick={this.selectItem}>
        <div className="avatar">
          <img src={avatar}/>
        </div>
        <div className="content">
          <p className="name">{name}</p>
          { this.renderFollow() }
        </div>

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
    follow,
    updateFollowerList
  }
)(BriefUserItem)
