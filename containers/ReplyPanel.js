import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class ReplyPanel extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      
    }
  }

  handleClick() {

  }

  render() {
    return (
      <div className='reply-panel'>
        <textarea ref="text" onKeyPress={this.handleKeyPress}>
        </textarea>

        <div className="panel-bottom">
          <button onClick={this.handleClick}>确定</button>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(ReplyPanel)
