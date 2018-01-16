import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Reboot } from 'material-ui'
import Navigation from './Navigation'

import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  flex: {
    flex: 1,
    display: 'flex'
  }
})

class App extends Component {

  render() {
    const { classes } = this.props
    return (
      <Router>
        <div className={classes.container}>
          <Reboot />
          <Navigation />
          <div className={classes.flex}>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </div>
        </div>
      </Router>
    )
  }

}

export default withStyles(styles)(App)
