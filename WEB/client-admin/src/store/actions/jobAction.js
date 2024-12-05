import { GET_JOBS, ADD_JOB, GET_JOB, EDIT_JOB, DELETE_JOB } from './typeAction'
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

// Add data
export const successAdd = (payload) => {
  return {
    type: ADD_JOB,
    err: payload.err,
  }
}

export const addJob = (input) => {
  return async (dispatch, getState) => {
    try {
      const { data, skills } = input
      const response = await fetch(`${baseUrl}/job`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify({ data, skills }),
      })
      console.log(response)
      if (!response.ok) throw new Error('Internal Server Error')
      
      dispatch(getDataJobs())
      const payload = { err: '' }
      return dispatch(successAdd(payload))
    } catch (err) {
      console.log(err)
      const payload = { err }
      return dispatch(successAdd(payload))
    }
  }
}

// Edit data
export const successEdit = (payload) => {
  return {
    type: EDIT_JOB,
    err: payload.err,
  }
}

export const editJob = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/job/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(input),
      })
      if (!response.ok) throw new Error('Internal Server Error')
      dispatch(getDataJobs())
      const payload = { err: '' }
      return dispatch(successEdit(payload))
    } catch (err) {
      const payload = { err }
      return dispatch(successEdit(payload))
    }
  }
}

// Delete data
export const successDelete = (payload) => {
  return {
    type: DELETE_JOB,
    err: payload.err,
  }
}

export const deleteJob = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/job/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
      })
      if (!response.ok) throw new Error('Internal Server Error')
      dispatch(getDataJobs())
      const payload = { err: '' }
      return dispatch(successDelete(payload))
    } catch (err) {
      const payload = { err }
      return dispatch(successDelete(payload))
    }
  }
}

