import { EventEmitter } from 'eventemitter3'
import { Action } from '../actions'

 class Store extends EventEmitter {
  private value: number
  private dispatcher: EventEmitter
  constructor(dispatcher, reducer) {
    super()
    this.dispatcher = dispatcher
    this.value = 0
    dispatcher.on('action', (action) => {
      this.value = reducer(this.value, action)
      this.emit("actionDone")
    })
  }
  getValue() {
    return this.value
  }
}

type Reducer = (state: any, action: Action) => any
export const createStore = (reducer: Reducer, dispatcher): Store => {
  //const dispatcher = new EventEmitter()
  const store = new Store(dispatcher, reducer)
  return store
}