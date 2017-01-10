import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {

}

class InputMoments extends Component {

  render() {
    return (
      <div id="input-moments">
        <div className="input-moments-inner">
          <textarea>
            asd
          </textarea>
        </div>
      </div>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   {  }
// )(InputMoments)

export default InputMoments
