import * as React from "react"
import { ActionCreator } from './action'
import { createStore } from './store'
import { EventEmitter } from 'eventemitter3'
import { Counter } from '../Counter'
import { counter } from '../reducers'

const dispatcher = new EventEmitter()
const action = new ActionCreator(dispatcher)
const store = createStore(counter, dispatcher)

export class Component extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { count: store.getValue() }
    store.on("actionDone", () => {
      this._onChange()
    })
  }
  _onChange() {
    this.setState({ count: store.getValue() })
  }
  increment() {
    action.increment()
  }
  decrement(){
    action.decrement()
  }
  render() {
    return (
      <Counter
        value={ this.state.count }
        onIncrement={ this.increment.bind(this) }
        onDecrement={ this.decrement.bind(this) }
      />
    )
  }
}

