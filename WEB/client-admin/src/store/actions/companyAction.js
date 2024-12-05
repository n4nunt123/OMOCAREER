import { GET_COMPANIES, ADD_COMPANY, GET_COMPANY, EDIT_COMPANY, DELETE_COMPANY } from './typeAction'
import { baseUrl } from '../../assets/url'

// Get companies
export const getCompanies = (payload) => {
  return {
    type: GET_COMPANIES,
    data: payload.data,
    err: payload.err,
    loading: payload.loading
  }
}

export const getDataCompanies = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/company`)

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      const loading = false
      const payload = { data, loading }
      dispatch(getCompanies(payload))

    } catch (err) {
      const payload = { err }
      dispatch(getCompanies(payload))
    } 
  }
}

// Get company
export const getCompany = (payload) => {
  return {
    type: GET_COMPANY,
    data: payload.data,
    err: payload.err,
    loading: payload.loading
  }
}

export const getDataCompany = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/company/${id}`)

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      const loading = false
      const payload = { data, loading }
      return dispatch(getCompany(payload))
    } catch (err) {
      const payload = { err }
      dispatch(getCompany(payload))
    } 
  }
}

// Add data
export const successAdd = (payload) => {
  return {
    type: ADD_COMPANY,
    err: payload.err,
  }
}

export const addCompany = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/company`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(input),
      })
      if (!response.ok) throw new Error('Internal Server Error')
      const payload = { err: '' }
      dispatch(getDataCompanies())
      return dispatch(successAdd(payload))
    } catch (err) {
      const payload = { err }
      return dispatch(successAdd(payload))
    }
  }
}

// Edit data
export const successEdit = (payload) => {
  return {
    type: EDIT_COMPANY,
    err: payload.err,
  }
}

export const editCompany = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/company/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(input),
      })
      if (!response.ok) throw new Error('Internal Server Error')

      const payload = { err: '' }
      dispatch(getDataCompanies())
      return dispatch(successEdit(payload))
    } catch (err) {
      const payload = { err }
      return dispatch(successEdit(payload))
    }
  }
}

// Edit data
export const successDelete = (payload) => {
  return {
    type: DELETE_COMPANY,
    err: payload.err,
  }
}

export const deleteCompany = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/company/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          access_token: localStorage.getItem('access_token')
        },
      })
      if (!response.ok) throw new Error('Internal Server Error')
      
      dispatch(getDataCompanies())
      const payload = { err: '' }
      return dispatch(successDelete(payload))
    } catch (err) {
      const payload = { err }
      return dispatch(successDelete(payload))
    }
  }
}