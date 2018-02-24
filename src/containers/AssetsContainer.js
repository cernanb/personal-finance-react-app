import React, { Component } from 'react'
import Account from '../components/Account'

class AssetsContainer extends Component {
  renderAssets() {
    return this.props.assets.map(asset => <Account account={asset} />)
  }

  render() {
    return <div>{this.renderAssets()}</div>
  }
}

export default AssetsContainer
