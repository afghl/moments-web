import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as status from '../reducers/paginate'
import { postComment } from '../actions/postComment'

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
      this.props.send()
    }
  }

  send() {
    // type, momentId, userId, (otherId), body
    this.props.postComment({
      momentId: this.props.moment.id,
      body: this.refs.text.value,
      type: 1
      // TODO: otherId
    }).then(() => {
      this.refs.text.value = ''
    })
  }

  render() {
    return (
      <div className='reply-panel'>
        <textarea ref="text" onKeyPress={this.handleKeyPress}>
        </textarea>

        <div className="panel-bottom">
          <button onClick={this.send}>确定</button>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { postComment }
)(ReplyPanel)
