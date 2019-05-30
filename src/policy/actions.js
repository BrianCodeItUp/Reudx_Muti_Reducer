import ACTION_TYPES from './actionTypes'

export function createPolicy (name, amount) {
  return {
    type: ACTION_TYPES.CREATE_POLIY,
    payload: { name, amount }
  }
}

export function deletePolicy (name) {
  return {
    type: ACTION_TYPES.DELETE_POLICY,
    payload: { name }
  }
}

export function addPolicyProduct (policyNum) {
  return {
    type: ACTION_TYPES.ADD_POLICY_PRODUCT,
    payload: { policyNum }
  }
}

export function deletePolicyProduct (policyNum) {
  return {
    type: ACTION_TYPES.DELETE_POLICY_NUM,
    payload: { policyNum }
  }
}
