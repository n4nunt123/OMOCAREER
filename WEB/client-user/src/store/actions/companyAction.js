import { GET_COMPANIES, GET_COMPANY } from './typeAction'
import { baseUrl } from '../../assets/url'

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
      const payload = { data, loading: false }
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
      const payload = { data, loading: false }
      return dispatch(getCompany(payload))
    } catch (err) {
      const payload = { err }
      dispatch(getCompany(payload))
    } 
  }
}
