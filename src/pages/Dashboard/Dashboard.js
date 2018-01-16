import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class Dashboard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    containerTrips: PropTypes.array.isRequired,
    currentFilters: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    fetchContainerTrips: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchContainerTrips()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Typography type='title'>Dashboard</Typography>
      </div>
    )
  }

}

export default withStyles(styles)(Dashboard)
