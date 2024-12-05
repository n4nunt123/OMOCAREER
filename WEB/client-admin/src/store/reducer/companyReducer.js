import { ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY, GET_COMPANIES, GET_COMPANY } from '../actions/typeAction'

const initialState = {
  companies: [],
  company: {},
  loadingCompanies: true,
  loadingCompany: true
}


function companyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.data,
        err: action.err,
        loadingCompanies: action.loading
      }
    case GET_COMPANY:
      return {
        ...state,
        company: action.data,
        err: action.err,
        loadingCompany: action.loading
      }
    case ADD_COMPANY:
      return {
        ...state,
        err: action.err,
      }
    case EDIT_COMPANY:
      return {
        ...state,
        err: action.err,
      }
    case DELETE_COMPANY:
      return {
        ...state,
        err: action.err,
      }
    default:
      return state
  }
}

export default companyReducer