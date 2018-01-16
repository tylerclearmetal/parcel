import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import {
  Typography
} from 'material-ui'

const styles = theme => ({
  container: {
    flex: 1,
    display: 'flex'
  }
})

class Home extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Typography type='title'>Track yo shipments</Typography>
      </div>
    )
  }

}

export default withStyles(styles)(Home)
