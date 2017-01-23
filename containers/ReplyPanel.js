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

    }
  }

  send() {
    this.props.postComment({
      body: this.refs.text.value,
      type: 1,
      momentId: this.props.moment.id
      // TODO: handle when otherId is present.
    }).then(() => {
      // trigger reply to close panel
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
