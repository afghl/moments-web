import React, { Component } from 'react'
import { connect } from 'react-redux'
import MomentItem from './MomentItem'
import List from '../components/List'
import * as status from '../reducers/paginate'
import { loadFeeds } from '../actions/feeds'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      moments
    },
    pagination: {
      feeds: {
        fetchStatus,
        ids,
        failTimes
      }
    }
  } = state

  return {
    feeds: ids.map(id => moments[id]),
    fetchStatus,
    failTimes
  }
}

class FeedList extends Component {

  componentWillMount() {
    if (this.shouldLoad(this.props)) {
      this.props.loadFeeds()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldLoad(nextProps))
      this.props.loadFeeds()
  }

  shouldLoad(props) {
    const { feeds, fetchStatus, failTimes } = props
    return feeds.length == 0
            && fetchStatus == status.PENDING
            && failTimes < 10
  }

  renderMoment(m) {
    return (
      <MomentItem moment={m} />
    )
  }

  render() {
    const { renderMoment, props: { feeds } } = this

    return (
      <div className={"feeds"}>
        <List
          renderItem={renderMoment}
          items={feeds}
          className={"moment-list"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loadFeeds }
)(FeedList)
