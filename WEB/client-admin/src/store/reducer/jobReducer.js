import { GET_JOBS, ADD_JOB, GET_JOB, DELETE_JOB, EDIT_JOB } from '../actions/typeAction'

const initialState = {
  jobs: [],
  job: {},
  loadingJobs: true,
  loadingJob: true
}


function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.data,
        err: action.err,
        loadingJobs: action.loading
      }
    case GET_JOB:
      return {
        ...state,
        job: action.data,
        err: action.err,
        loadingJob: action.loading
      }
    case ADD_JOB:
      return {
        ...state,
        err: action.err,
      }
    case EDIT_JOB:
      return {
        ...state,
        err: action.err,
      }
    case DELETE_JOB:
      return {
        ...state,
        err: action.err,
      }
    default:
      return state
  }
}

export default jobsReducer