import { GET_COMPANIES, GET_COMPANY } from '../actions/typeAction'

const initialState = {
  companies: [],
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
    default:
      return state
  }
}

export default companyReducer