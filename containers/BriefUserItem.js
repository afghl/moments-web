import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/selectUser'
import { loadMoments } from '../actions/moments'

const mapStateToProps = (state, ownProps) => {
  const { selectUserId } = state.page.state

  return { selectUserId }
}

class BriefUserItem extends Component {
  constructor(props) {
    super(props)
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem() {
    const { user: { id }, selectUser, loadMoments } = this.props

    selectUser(id).then(loadMoments)
  }

  render() {
    const { user: { id, avatar, name }, selectUserId } = this.props
    const highLight = id == selectUserId ? 'high-light' : ''
    const className = `brief-user-item ${highLight}`

    return (
      <li className={className} onClick={this.selectItem}>
        <div className="avatar"><img src={avatar}/></div>

        <p className="name">{name}</p>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  { selectUser, loadMoments }
)(BriefUserItem)
