import { connect } from 'react-redux'
import { fetchContainerTrips } from 'operations/containerTrips'

import Dashboard from './Dashboard'

const mapStateToProps = state => {
  return {
    containerTrips: state.containerTrips.items,
    currentFilters: state.containerTrips.currentFilters,
    isLoading: state.containerTrips.isLoading,
    error: state.containerTrips.error
  }
}

const dispatchActions = { fetchContainerTrips }

export default connect(mapStateToProps, dispatchActions)(Dashboard)
