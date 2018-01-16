import { fork } from 'redux-saga/effects'
import { watchFetchContainerTrips } from './containerTrips'

export default function* rootSaga() {
  yield fork(watchFetchContainerTrips)
}
