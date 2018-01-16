import { createAction } from 'redux-actions'
import { takeLatest, put, call } from 'redux-saga/effects'
import * as api from '../api'

export const FETCH_CONTAINER_TRIPS_REQUEST = 'FETCH_CONTAINER_TRIPS_REQUEST'
export const FETCH_CONTAINER_TRIPS_SUCCESS = 'FETCH_CONTAINER_TRIPS_SUCCESS'
export const FETCH_CONTAINER_TRIPS_FAILURE = 'FETCH_CONTAINER_TRIPS_FAILURE'
export const SELECT_CONTAINER_TRIP = 'SELECT_CONTAINER_TRIP'
export const TOGGLE_CONTAINER_TRIP_SELECTION = 'TOGGLE_CONTAINER_TRIP_SELECTION'

const defaultParams = {
  offset: 0,
  limit: 20
}

export const fetchContainerTrips = createAction(
  FETCH_CONTAINER_TRIPS_REQUEST,
  (params = defaultParams) => params
)

// Sagas

export function* fetchContainerTripsAsync ({ type, payload }) {
  const res = yield call(api.getContainerTrips, payload)
  yield put({ type: FETCH_CONTAINER_TRIPS_SUCCESS, payload: res.data })
}

export function* watchFetchContainerTrips() {
  yield takeLatest(FETCH_CONTAINER_TRIPS_REQUEST, fetchContainerTripsAsync)
}
