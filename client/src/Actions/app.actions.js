import CONSTANTS from '../Core/constants'

export function setMessage(message) {
  return {
    type: CONSTANTS.EVENT_TYPES.APP.SET_MESSAGE,
    message
  }
}

export function resetMessage() {
  return {
    type: CONSTANTS.EVENT_TYPES.APP.SET_MESSAGE,
    message: null
  }
}