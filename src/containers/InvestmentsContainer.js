import React, { Component } from 'react'
import Account from '../components/Account'
import uuid from 'uuid/v4'

class InvestmentsContainer extends Component {
  renderInvestments() {
    return this.props.investments.map(asset => (
      <Account key={uuid()} account={asset} />
    ))
  }

  render() {
    return (
      <div>
        <h1>Investments</h1>
        {this.renderInvestments()}
      </div>
    )
  }
}

export default InvestmentsContainer
