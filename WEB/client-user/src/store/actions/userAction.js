import { GET_USERS } from "./typeAction";
import { baseUrl } from "../../assets/url";

export const getUsers = (payload) => {
  return {
    type: GET_USERS,
    data: payload.data,
    err: payload.err,
  }
}

export const getDataUsers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/User`)

      if (!response.ok) throw new Error('Internal Server Error')

      const data = await response.json()
      const payload = { data }
      dispatch(getUsers(payload))

    } catch (err) {
      const payload = { err }
      dispatch(getUsers(payload))
    } 
  }
}