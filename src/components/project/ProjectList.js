import React from 'react'
import ProjectSummery from './ProjectSummery'

export default ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects &&
        projects.map(project => (
          <ProjectSummery key={project.id} project={project} />
        ))}

    </div>
  )
}
