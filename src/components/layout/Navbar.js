import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export default () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          <span role='img' aria-label='Fire emoji'>🔥 </span>Firecamp
        </Link>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  )
}
