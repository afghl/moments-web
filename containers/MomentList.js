import React, { Component } from 'react'
import { connect } from 'react-redux'
import MomentItem from './MomentItem'
import List from '../components/List'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      moments
    },
    pagination: {
      moments: {
        fetchStatus,
        ids,
        failTimes
      }
    }
  } = state

  return {
    moments: ids.map(id => moments[id]),
    fetchStatus,
    failTimes
  }
}

class MomentList extends Component {

  renderMoment(m) {
    return (
      <MomentItem
        moment={m}
      />
    )
  }

  render() {
    const { renderMoment, props: { moments } } = this;

    return (
      <div className={"moments"}>
        <List
          renderItem={renderMoment}
          items={moments}
          className={"moment-list"}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { }
)(MomentList)
