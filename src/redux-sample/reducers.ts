type Action = { type: String }
type State = number

export const counter = (state: State = 0, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}