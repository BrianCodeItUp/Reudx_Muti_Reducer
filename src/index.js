import { createStore, combineReducers } from 'redux'
import policyReducer from './policy/reducer'
import claimRedcuer from './claim/reducer'
import * as policyActions from './policy/actions'
import * as claimActions from './claim/actions'

const ourDepartments = combineReducers({
  policy: policyReducer,
  claimHistory: claimRedcuer
})

const store = createStore(ourDepartments)

store.dispatch(policyActions.createPolicy('John', 20))

console.log(store.getState())
