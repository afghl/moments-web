import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {

}

class MomentItem extends Component {

  render() {
    const { body } = this.props.moment

    return (
      <li className="moment">
        {body}
      </li>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   {  }
// )(BriefUserItem)

export default MomentItem
