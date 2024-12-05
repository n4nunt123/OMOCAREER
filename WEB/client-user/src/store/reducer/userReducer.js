import { GET_USERS } from '../actions/typeAction'

const initialState = {
  users: []
}


function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.data,
        err: action.err
      }
    default:
      return state
  }
}

export default userReducer