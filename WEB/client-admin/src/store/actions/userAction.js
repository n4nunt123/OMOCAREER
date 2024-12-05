import { GET_USERS, LOGIN_USER } from "./typeAction";
import { baseUrl } from "../../assets/url";

export const getUsers = (payload) => {
  return {
    type: GET_USERS,
    data: payload.data,
    err: payload.err,
    loading: payload.loading
  }
}

export const getDataUsers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/user`, {
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      
      const payload = { data, loading: false }
      dispatch(getUsers(payload))
    } catch (err) {
      const payload = { err }
      dispatch(getUsers(payload))
    } 
  }
}

export const loginSucces = (payload) => {
  return {
    type: LOGIN_USER,
    err: payload.err
  }
}

export const login = (input) => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = input
      const response = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) throw new Error('Internal Server Error')

      const { access_token } = await response.json()
      localStorage.setItem('access_token', access_token)
      const payload = { err: '' }
      return dispatch(loginSucces(payload))

    } catch (err) {
      const payload = { err }
      return dispatch(loginSucces(payload))
    }
  }
}