import React from 'react'
import { NavLink } from 'react-router-dom'
export default () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/new-project'>New Project</NavLink>
      </li>
      <li><NavLink to='/logout'>Logout</NavLink></li>
      <li>
        <NavLink to='/user' className='btn btn-floating pink lighten-1'>
          ST
        </NavLink>
      </li>
    </ul>
  )
}
