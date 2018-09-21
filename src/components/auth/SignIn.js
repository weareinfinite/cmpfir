import React, { Component } from 'react'

export default class SignIn extends Component {
  state = { email: '', password: '' }

  handleChange = e => {
    console.log(e)

    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    console.log(e)
  }

  render () {
    return (
      <div className='container'>
        <form action='' className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Paasword</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink z-depth-0 lighten-0'>
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}
