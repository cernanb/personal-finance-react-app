import React, { Component } from 'react'
import Account from '../components/Account'
import uuid from 'uuid/v4'

class AssetsContainer extends Component {
  renderAssets() {
    return this.props.assets.map(asset => (
      <Account key={uuid()} account={asset} />
    ))
  }

  render() {
    return (
      <div>
        <h1>Assets</h1>
        {this.renderAssets()}
      </div>
    )
  }
}

export default AssetsContainer
