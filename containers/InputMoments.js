import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postMoment } from '../actions/postMoment'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class InputMoments extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearValue = this.clearValue.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleKeyPress(target) {
    if(target.charCode == 13) {
      const body = this.state.value
      this.props.postMoment({ body }).then(this.clearValue)
    }
  }

  clearValue() {
    console.log('clearValue');
    this.state.value = '!!'
  }

  render() {
    return (
      <div id="input-moments">
        <div className="input-moments-inner">
          <textarea value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange}>
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
