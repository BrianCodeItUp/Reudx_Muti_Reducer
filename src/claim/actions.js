import ACTION_TYPES from './actionTypes'

export function createClaim (name, moneyToCollect) {
  return {
    type: ACTION_TYPES.CREATE_CLAIM,
    payload: { name, moneyToCollect }
  }
}
