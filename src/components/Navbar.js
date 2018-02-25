import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul
      style={{
        backgroundColor: 'lightblue',
        marginTop: 0,
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/assets">Assets</Link>
      </li>
      <li>
        <Link to="/liabilities">Liabilities</Link>
      </li>
      <li>
        <Link to="/investments">Investments</Link>
      </li>
    </ul>
  )
}
export default Navbar
