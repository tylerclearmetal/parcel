import axios from 'axios'
import qs from 'qs'

const client = axios.create({
  baseURL: 'http://localhost:5000/'
})

export function getContainerTrips(options) {
  options.tenant = 'gp'
  const query = qs.stringify(options)
  return client.get(`container_trips/filtered?${query}`)
}
