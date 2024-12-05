import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import companyReducer from './reducer/companyReducer'
import jobReducer from './reducer/jobReducer'
import userReducer from './reducer/userReducer'

const rootReducer = combineReducers({
  companyReducer,
  jobReducer,
  userReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'test/helloWorld' })

export default store