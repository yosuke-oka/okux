import { EventEmitter } from 'eventemitter3'
import { ActionType } from './type'

export class Store extends EventEmitter {
  private value: number
  constructor(dispatcher) {
    super()
    this.value = 0
    dispatcher.on({type:"INCREMENT"}, this.onIncrement.bind(this))
    dispatcher.on("decrement", this.onDecrement.bind(this))
  }
  getValue() {
    return this.value
  }
  onIncrement() {
    this.value += 1
    this.emit("increment")
  }
  onDecrement() {
    this.value -= 1
    this.emit("decrement")
  }
}

type Reducer = (state: any, action: ActionType) => any
export const createStore = (reducer: Reducer): Store => {
  const dispatcher = new EventEmitter()
  const store = new Store(dispatcher)
  return store
}