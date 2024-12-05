import { GET_JOBS, GET_JOB } from '../actions/typeAction'

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
    default:
      return state
  }
}

export default jobsReducer