import React from 'react'

export default ({ account }) => {
  return (
    <div>
      <h2>{account.financialInst}</h2>
      <h5>{account.accountType}</h5>
      <h3>{account.balance}</h3>
    </div>
  )
}
