import { EventEmitter } from 'eventemitter3'
import { Action } from '../actions'

 class Store extends EventEmitter {
  private state: number
  private dispatcher: EventEmitter
  constructor(dispatcher, reducer) {
    super()
    this.dispatcher = dispatcher
    this.state = 0 // ここで初期化じゃなくてreducerのinitialStateもってきたい
    dispatcher.on('action', (action) => {
      this.state = reducer(this.state, action)
      this.emit("actionDone")
    })
  }
  getState() {
    return this.state
  }
  getDispatcher() {
    return this.dispatcher
  }
}

type Reducer = (state: any, action: Action) => any
export const createStore = (reducer: Reducer): Store => {
  const dispatcher = new EventEmitter()
  const store = new Store(dispatcher, reducer)
  return store
}