import { EventEmitter } from 'eventemitter3'
import { Action } from '../actions'

class Store extends EventEmitter {
  private state: any // ここの型、reducerから取る？
  private dispatcher: EventEmitter
  constructor(dispatcher, reducer) {
    super()
    this.dispatcher = dispatcher
    this.state = reducer(this.state, {type:''}) // initialStateがほしい
    dispatcher.on('action', (action) => {
      this.state = reducer(this.state, action)
      this.emit('actionDone')
    })
  }
  getState() {
    return this.state
  }
  getDispatcher() {
    return this.dispatcher
  }
}

type Reducer = (state: any, action: Action) => {}
export const createStore = (reducer: Reducer): Store => {
  const dispatcher = new EventEmitter()
  const store = new Store(dispatcher, reducer)
  return store
}