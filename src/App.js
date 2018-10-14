import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'

class App extends Component {
  render () {
    console.log('App props', this.props)
    return (
      <BrowserRouter>
        <div className='App'>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar
            closeOnToastrClick
          />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/create' component={CreateProject} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
