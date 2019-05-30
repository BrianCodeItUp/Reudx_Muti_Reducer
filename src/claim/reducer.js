import { createSwitch } from '../utils'
import ACTION_TYPES from './actionTypes'

const claimIntialState = {
  claimList: []
}

const claimSwithAction = createSwitch({
  [ACTION_TYPES.CREATE_CLAIM]: createClaim
})

const claimReducer = (state = claimIntialState, action) => {
  return claimSwithAction(state, action)
}

function createClaim (state, { payload }) {
  return { ...state, claimList: [ ...state.claimList, { payload } ] }
}

export default claimReducer
