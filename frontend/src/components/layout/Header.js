import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>Haip Influencers Test</h1>
      <Link style={linkStyle} to='/'>Lista de Influencers</Link> | <Link style={linkStyle} to='/about'>Acerca De</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header
