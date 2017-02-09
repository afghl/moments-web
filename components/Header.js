import React, { Component } from 'react'
import SelectUser from '../containers/SelectUser'

class Header extends Component {
  render() {
    return (
      <header>
        <a className="main-logo" href="/">
          Moments
        </a>

        <div className="options">
          <SelectUser />
        </div>
      </header>
    )
  }
}

export default Header
