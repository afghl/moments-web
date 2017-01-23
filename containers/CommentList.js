import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class CommentList extends Component {

  render() {
    return (
      <div className="comments">点赞和评论区域</div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(CommentList)
