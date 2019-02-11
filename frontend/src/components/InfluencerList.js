import React, { Component } from 'react'
import Influencer from './Influencer'
import PropTypes from 'prop-types'

class InfluencerList extends Component {
  render () {
    return this.props.influencers.map((influencer) => {
      return <Influencer key={ influencer._id } influencer={ influencer } />
    })
  }
}

// PropTypes
InfluencerList.propTypes = {
  influencers: PropTypes.array.isRequired,
}

export default InfluencerList
