import React from 'react'

export default ({ project }) => {
  return (
    <div className='card z-depth-0 project-summery'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>Posted By : Sarath</p>
        <p className='grey-text'>20 Sep</p>
      </div>
    </div>
  )
}
