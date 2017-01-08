import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FollowerList from '../containers/FollowerList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id={"main-section"}>
          <div className={"row"}>
            <div className={"left"}>
              s
            </div>
            <div className={"right"}>
              <FollowerList />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
