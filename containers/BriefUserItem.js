import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {

}

class BriefUserItem extends Component {

  render() {
    const { user: { avatar, name } } = this.props

    return (
      <div className="brief-user-item">
        <span className="avater"><img src={avatar}/></span>
        {name}
      </div>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   {  }
// )(BriefUserItem)

export default BriefUserItem
