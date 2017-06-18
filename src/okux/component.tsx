import * as React from "react"
import { createStore } from './store'
import { EventEmitter } from 'eventemitter3'
import { Counter } from '../Counter'
import { counter } from '../reducers'
import * as actions from '../actions'

const dispatcher = new EventEmitter()
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
  dispatch(action) {
    dispatcher.emit('action', action())
  }
  render() {
    return (
      <Counter
        value={ this.state.count }
        onIncrement={ () => this.dispatch(actions.increment) }
        onDecrement={ () => this.dispatch(actions.decrement) }
      />
    )
  }
}

