import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import * as status from '../reducers/paginate'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'

const mapStateToProps = (state, ownProps) => {
  const entities = state.entities.comments
  const ids = ownProps.moment.comments
  const comments = ids.map(id => entities[id])

  const talks = filter(comments, c => c.type == 1)
  const likes = filter(comments, c => c.type == 2)
  return { likes, talks }
}

class CommentList extends Component {

  renderLike(like) {
    return (
      <li className="likes-item">
        <img src={like.userAvatar}/>
      </li>
    )
  }

  renderTalk(talk) {
    console.log(talk);

    return (
      <li className="talks-item">
        <p>
          <span className="replier">
            {talk.userName}
          </span>
          { !isEmpty(talk.otherName) ?
              (<span className="other-replier"> 回复 {talk.otherName} </span>) : ('')
          }
          ：
          {talk.body}
        </p>
      </li>
    )
  }

  render() {
    const { renderLike, renderTalk } = this
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
        <List
          renderItem={renderTalk}
          items={talks}
          className={"comments-talks"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(CommentList)
