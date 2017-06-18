import * as React from "react"
import { createStore } from './store'
import { EventEmitter } from 'eventemitter3'
import { Counter } from '../Counter'
import { counter } from '../reducers'
import * as actions from '../actions'

const dispatcher = new EventEmitter()
const store = createStore(counter, dispatcher)

export class OkuxApp extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { value: store.getState() }
    store.on("actionDone", () => {
      this._onChange()
    })
  }
  _onChange() {
    this.setState({ value: store.getState()})
  }
  dispatch(action) {
    dispatcher.emit('action', action())
  }
  render() {
    return (
      <Counter
        value={ this.state.value }
        onIncrement={ () => this.dispatch(actions.increment) }
        onDecrement={ () => this.dispatch(actions.decrement) }
      />
    )
  }
}

