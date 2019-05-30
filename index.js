// utils
function createSwitch (actionToReducerMap) {
  return function switchAction (state, action = {}) {
    const reducer = actionToReducerMap[action.type]

    return reducer
      ? reducer(state, action)
      : state
  }
}

function keyMirror (actionTypes) {
  const actionsObjList = _.map(actionTypes, actionType => ({ [actionType]: actionType }))
  return _.assign(...actionsObjList)
}


/**
 * 
 */
// actionsTypes
const policyActionTypes = [ 
  'CREATE_POLIY',
  'DELETE_POLICY',
  'ADD_POLICY_PRODUCT',
  'DELETE_POLICY_PRODUCT'
]


// policy actions
const POLICY_ACTIONTYPES = keyMirror(policyActionTypes)

function createPolicy (name, amount) {
  return {
    type: POLICY_ACTIONTYPES.CREATE_POLIY,
    payload: { name, amount }
  }
}

function deletePolicy (name) {
  return {
    type: POLICY_ACTIONTYPES.DELETE_POLICY,
    payload: { name, amount }
  }
}

function addPolicyProduct(policyNum) {
  return {
    type: POLICY_ACTIONTYPES.ADD_POLICY_PRODUCT,
    payload: { policyNum }
  }
}

function deletePolicyProduct(policyNum) {
  return {
    type: POLICY_ACTIONTYPES.DELETE_POLICY_NUM,
    payload: { policyNum }
  }
}



// reducers

/**
 * Policy Reducers
 */
const policyInitialState = {
  policyOwners: [],
  policy: []
}

const policyActionSwith = createSwitch({
  [POLICY_ACTIONTYPES.CREATE_POLIY]: createPolicyReducer,
  [POLICY_ACTIONTYPES.DELETE_POLICY]: deletePolicyReducer,
  [POLICY_ACTIONTYPES.ADD_POLICY_PRODUCT]: addPolicyProductReducer,
  [POLICY_ACTIONTYPES.DELETE_POLICY_PRODUCT]: deletePolicyProductReducer
})



const rootPolicyReducer = (state = policyInitialState, action) => {
  return policyActionSwith(state, action)
}

function createPolicyReducer (state, { payload }) {
  return { ...state, policyOwners: [ ...policyOwners, payload ]}
}

function deletePolicyReducer (state, { payload }) {
  const newOwners = _.filter(state.policyOwners, owner => owner != payload.name)
  return { ...state, policyOwners: newOwners }
}

function addPolicyProductReducer (state, { payload }) {
  return { ...state, policy: [ ...state.policy, payload.policyNum ] }
}

function deletePolicyProductReducer (state, { payload }) {
  const newOwners = _.filter(state.policyOwners, owner => owner != payload.name)
  return { ...state, policyOwners: newOwners }
}

/**
 * Claim 
 */

// actionTypes
const claimActionTypes = ['CREATE_CLAIM']

const CLAIM_ACTION_TYPES = keyMirror(claimActionTypes)

// 