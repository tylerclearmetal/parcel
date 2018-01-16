import {
  FETCH_CONTAINER_TRIPS_REQUEST,
  FETCH_CONTAINER_TRIPS_SUCCESS,
  FETCH_CONTAINER_TRIPS_FAILURE
} from 'operations/containerTrips'

const initialState = {
  items: [],
  currentFilters: {},
  isLoading: false,
  error: null
}

export default function containerTrips(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CONTAINER_TRIPS_REQUEST:
      return { ...state, isLoading: true, error: null }
    case FETCH_CONTAINER_TRIPS_SUCCESS:
      return { ...state, isLoading: false, items: payload }
    case FETCH_CONTAINER_TRIPS_FAILURE:
      return { ...state, isLoading: false, error: payload }
    default: return state
  }
}
