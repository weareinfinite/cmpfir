import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'

import { fetchProject } from '../../actions/projectActions'

class Dashboard extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchProject()
  }
  render () {
    const { projects } = this.props
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

function stateToProps (state) {
  return {
    projects: state.project.projects
  }
}

export default connect(stateToProps, { fetchProject })(Dashboard)
