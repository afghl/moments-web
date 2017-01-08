import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {

}

class BriefUserItem extends Component {

  render() {
    const { user: { avatar, name } } = this.props

    return (
      <li className="brief-user-item">
        <div className="avatar"><img src={avatar}/></div>

        <p className="name">{name}</p>
      </li>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   {  }
// )(BriefUserItem)

export default BriefUserItem
