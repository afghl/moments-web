import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FollowerList from '../containers/FollowerList'
import MomentList from '../containers/MomentList'
import InputMoments from '../containers/InputMoments'
import FeedList from '../containers/FeedList'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { current } = state.page.state

  return { current }
}
class App extends Component {
  list() {
    const { current } = this.props
    if (current == 'feeds') {
      return <FeedList />
    } else {
      return <MomentList />
    }
  }

  render() {
    return (
      <div>
        <Header />
        <main id={"main-section"}>
          <div className={"row"}>
            <div className={"left"}>
              {this.list()}
            </div>
            <div className={"right"}>
              <FollowerList />
            </div>
            <InputMoments />
          </div>
        </main>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)
