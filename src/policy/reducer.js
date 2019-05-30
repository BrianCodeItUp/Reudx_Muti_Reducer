import ACTION_TYPES from './actionTypes'
import { createSwitch } from '../utils'
import _ from 'lodash'

const policyInitialState = {
  policyOwners: [],
  policy: []
}
const policyActionSwith = createSwitch({
  [ACTION_TYPES.CREATE_POLIY]: createPolicy,
  [ACTION_TYPES.DELETE_POLICY]: deletePolicy,
  [ACTION_TYPES.ADD_POLICY_PRODUCT]: addPolicyProduct,
  [ACTION_TYPES.DELETE_POLICY_PRODUCT]: deletePolicyProduct
})

const policyReducer = (state = policyInitialState, action) => {
  return policyActionSwith(state, action)
}

function createPolicy (state, { payload }) {
  return { ...state, policyOwners: [ ...state.policyOwners, payload ] }
}

function deletePolicy (state, { payload }) {
  const newOwners = _.filter(state.policyOwners, owner => owner !== payload.name)
  return { ...state, policyOwners: newOwners }
}

function addPolicyProduct (state, { payload }) {
  return { ...state, policy: [ ...state.policy, payload.policyNum ] }
}

function deletePolicyProduct (state, { payload }) {
  const newOwners = _.filter(state.policyOwners, owner => owner !== payload.name)
  return { ...state, policyOwners: newOwners }
}

export default policyReducer
