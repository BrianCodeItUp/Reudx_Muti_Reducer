import { keyMirror } from '../utils'
const policyActionTypes = [
  'CREATE_POLIY',
  'DELETE_POLICY',
  'ADD_POLICY_PRODUCT',
  'DELETE_POLICY_PRODUCT'
]

const ACTION_TYPES = keyMirror(policyActionTypes)

export default ACTION_TYPES
