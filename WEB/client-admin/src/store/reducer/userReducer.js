import { GET_USERS, LOGIN_USER } from '../actions/typeAction'

const initialState = {
  users: [],
  loading: true
}


function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.data,
        err: action.err,
        loading: action.loading
      }
    case LOGIN_USER:
      return {
        ...state,
        err: action.err,
      }
    default:
      return state
  }
}

export default userReducer