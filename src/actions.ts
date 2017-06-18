export type Action = { type: String }
export const increment = (): Action => ({ type: 'INCREMENT' })
export const decrement = (): Action => ({ type: 'DECREMENT' })