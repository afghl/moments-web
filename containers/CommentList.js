import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import * as status from '../reducers/paginate'
import filter from 'lodash/filter'

const mapStateToProps = (state, ownProps) => {
  const entities = state.entities.comments
  const ids = ownProps.moment.comments
  const comments = ids.map(id => entities[id])

  const likes = filter(comments, c => c.type == 1)
  const talks = filter(comments, c => c.type == 2)
  return { likes, talks }
}

class CommentList extends Component {

  renderLike(like) {
    const { userAvatar } = like

    return (
      <li className="likes-item">
        <img src={userAvatar}/>
      </li>
    )
  }

  render() {
    const { renderLike } = this
    const { likes, talks } = this.props

    if (likes.length == 0 && talks.length == 0)
      return (
        <div></div>
      )

    return (
      <div className="comments">
        <List
          renderItem={renderLike}
          items={likes}
          className={"comments-likes"}
        />


      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(CommentList)
