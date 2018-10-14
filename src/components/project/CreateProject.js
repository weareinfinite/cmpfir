import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { createProject } from '../../actions/projectActions'

const initalState = {
  title: '',
  content: ''
}

class CreateProject extends Component {
  state = { ...initalState }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props)

    let project = { ...this.state, created_at: new Date() }

    createProject(project).then(doc => {
      toastr.success('Success!', 'Project created succeessfully')
      this.setState(initalState, () => {
        this.props.history.push('/')
      })
    })
  }
  render () {
    return (
      <div className='container'>
        <form action='' className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>Create Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Content</label>
            <textarea
              name='content'
              id='content'
              className='materialize-textarea'
              cols='10'
              rows='10'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink z-depth-0 lighten-0'>
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null)(CreateProject)
