import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import AssetsContainer from './containers/AssetsContainer'
import LiabilitiesContainer from './containers/LiabilitiesContainer'
import InvestmentsContainer from './containers/InvestmentsContainer'

import Navbar from './components/Navbar'

const user = {
  name: 'Cernan Bernardo',
  age: 35,
  accounts: [
    {
      financialInst: 'BECU',
      accountNum: '432423',
      type: 'asset',
      accountType: 'Bank Checking',
      balance: 3000,
    },
    {
      financialInst: 'BECU',
      accountNum: '878989',
      type: 'asset',
      accountType: 'Bank Savings',
      balance: 5000,
    },
    {
      financialInst: 'Capital One',
      accountNum: '432432',
      type: 'liability',
      accountType: 'Credit Card',
      balance: 2000,
    },
    {
      financialInst: 'Fidelity',
      accountNum: '432432',
      type: 'investment',
      accountType: '401k',
      balance: 10000,
    },
  ],
}

class App extends Component {
  state = {
    user,
  }
  componentDidMount() {
    fetch(`http://localhost:4000`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    const { accounts } = this.state.user
    const assets = accounts.filter(account => account.type === 'asset')
    const liabilities = accounts.filter(account => account.type === 'liability')
    const investments = accounts.filter(
      account => account.type === 'investment'
    )
    return (
      <div id="main">
        <Navbar />
        <div className="App-intro">
          Hello {this.state.user.name}, this is your dashboard.
          <AssetsContainer assets={assets} />
          <LiabilitiesContainer liabilities={liabilities} />
          <InvestmentsContainer investments={investments} />
        </div>
      </div>
    )
  }
}

export default App

{
  /*  */
}
