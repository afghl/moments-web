import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as status from '../reducers/paginate'
import { postComment } from '../actions/postComment'
import { replyMoment } from '../actions/reply'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class ReplyPanel extends Component {
  constructor(props) {
    super(props)
    this.send = this.send.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      this.send()
    }
  }

  send() {
    this.props.postComment({
      body: this.refs.text.value,
      type: 1,
      momentId: this.props.moment.id
      // TODO: handle when otherId is present.
    }).then(() => {
      this.props.replyMoment(-1)
    })
  }

  render() {
    return (
      <div className='reply-panel'>
        <textarea ref="text" onKeyPress={this.handleKeyPress}>
        </textarea>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { postComment, replyMoment }
)(ReplyPanel)
