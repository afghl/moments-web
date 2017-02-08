import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as status from '../reducers/paginate'
import { selectUser, updateCurrentPage } from '../actions/page'
import { loadMoments, updateMomentsParams } from '../actions/moments'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      users
    },
    page: { state: { current, selectUserId } }
  } = state

  return {
    user: users[currentUserId],
    current,
    selectUserId
  }
}

class MyList extends Component {

  constructor(props) {
    super(props)
    this.selectFeed = this.selectFeed.bind(this)
    this.selectMe = this.selectMe.bind(this)
  }

  selectMe() {
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

  selectFeed() {
    const { updateCurrentPage, selectUser } = this.props
    updateCurrentPage('feeds').then(() => {
      // select none user.
      selectUser(-1)
    })
  }

  render() {
    const {
      props: { user }
    } = this
    // return empty unless user present
    if (!user) return ( <div></div> )

    return (
      <div className={"block my-list"}>
        <div className="mylist-header">
        </div>
        <div className="mylist-main">
          <div className="mylist-detail">
            <div className="avatar"><img/></div>
            <div className="name">{user.name}</div>
          </div>
          <div className="mylist-operations">
            <a
              href="javascript:;"
              onClick={this.selectMe}
              className={this.props.selectUserId == currentUserId ? 'selected' : ''}
            >
              moments
            </a>
            <a
              href="javascript:;"
              onClick={this.selectFeed}
              className={this.props.current == "feeds" ? 'selected' : ''}
            >
              timeline
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { updateCurrentPage, selectUser, loadMoments, updateMomentsParams }
)(MyList)
