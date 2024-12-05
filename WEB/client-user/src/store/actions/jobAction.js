import { GET_JOBS, GET_JOB } from './typeAction'
import { baseUrl } from '../../assets/url'


// Get jobs
export const getJobs = (payload) => {
  return {
    type: GET_JOBS,
    data: payload.data,
    err: payload.err,
    loading: payload.loading
  }
}

export const getDataJobs = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/job`)

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      const payload = { data, loading: false }
      return dispatch(getJobs(payload))

    } catch (err) {
      const payload = { err }
      dispatch(getJobs(payload))
    } 
  }
}

// Get job
export const getJob = (payload) => {
  return {
    type: GET_JOB,
    data: payload.data,
    err: payload.err,
    loading: payload.loading
  }
}

export const getDataJob = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/job/${id}`)

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      const payload = { data, loading: false }
      return dispatch(getJob(payload))
    } catch (err) {
      const payload = { err }
      dispatch(getJob(payload))
    } 
  }
}
