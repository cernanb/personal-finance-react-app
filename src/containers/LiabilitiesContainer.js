import React, { Component } from 'react'
import Account from '../components/Account'
import uuid from 'uuid/v4'

class LiabilitiesContainer extends Component {
  renderLiabilities() {
    return this.props.liabilities.map(asset => (
      <Account key={uuid()} account={asset} />
    ))
  }

  render() {
    return (
      <div>
        <h1>Liabilities</h1>
        {this.renderLiabilities()}
      </div>
    )
  }
}

export default LiabilitiesContainer
