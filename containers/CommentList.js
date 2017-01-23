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

  render() {
    const { likes, talks } = this.props

    if (likes.length == 0 && talks.length == 0)
      return (
        <div></div>
      )

    return (
      <div className="comments">点赞和评论区域</div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(CommentList)
