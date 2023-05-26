import update from 'immutability-helper'

const initialstate = () => {
  return {}
}

type Action = {
  type: string
  payload?: any
}

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case '@APP/AUTH_ENVIRONMENT':
      return update(state, {
        environment: { $set: action.payload.environment }
      })
    default:
      return state
  }
}
