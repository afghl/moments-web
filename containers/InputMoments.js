import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postMoment } from '../actions/postMoment'
import { updateCurrentPage } from '../actions/page'
import { currentUserId } from '../globalData/index'

const mapStateToProps = (state, ownProps) => {
  const { entities: { users } } = state

  return {
    user: users[currentUserId]
  }
}

class InputMoments extends Component {

  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      this.props.postMoment({
        body: this.refs.text.value
      }).then(() => {
        updateCurrentPage('feeds')
      }).then(() => {
        this.refs.text.value = ''
      })
    }
  }

  render() {
    return (
      <div id="input-moments" className="block">
        <div className="input-moments-inner">
          <div className="avatar">
            <img/>
          </div>
          <div className="inputs">
            <textarea ref="text" onKeyPress={this.handleKeyPress} placeholder="想说点什么...">
            </textarea>
            <a href="javascript:;">发送</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { postMoment, updateCurrentPage }
)(InputMoments)
