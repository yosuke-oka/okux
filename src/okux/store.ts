import { EventEmitter } from 'eventemitter3'
import { Action } from '../actions'

 class Store extends EventEmitter {
  private state: number
  private dispatcher: EventEmitter
  constructor(dispatcher, reducer) {
    super()
    this.dispatcher = dispatcher
    this.state = 0
    dispatcher.on('action', (action) => {
      this.state = reducer(this.state, action)
      this.emit("actionDone")
    })
  }
  getState() {
    return this.state
  }
}

type Reducer = (state: any, action: Action) => any
export const createStore = (reducer: Reducer, dispatcher): Store => {
  //const dispatcher = new EventEmitter()
  const store = new Store(dispatcher, reducer)
  return store
}