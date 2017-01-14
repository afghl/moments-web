import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postMoment } from '../actions/postMoment'

const mapStateToProps = (state, ownProps) => {
  return {}
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
        this.refs.text.value = ''
      })
    }
  }

  render() {
    return (
      <div id="input-moments">
        <div className="input-moments-inner">
          <textarea ref="text" onKeyPress={this.handleKeyPress}>
          </textarea>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { postMoment }
)(InputMoments)
