import * as React from 'react'
import { createStore } from './store'
import { Counter } from '../Counter'
import { counter } from '../reducers'
import * as actions from '../actions'

const store = createStore(counter)

export class OkuxApp extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { value: store.getState() }
    store.on('actionDone', () => {
      this._onChange()
    })
  }
  _onChange() {
    this.setState({ value: store.getState()})
  }
  dispatch(action) {
    store.getDispatcher().emit('action', action())
  }
  render() {
    return (
      <Counter
        value={this.state.value}
        onIncrement={() => this.dispatch(actions.increment)}
        onDecrement={() => this.dispatch(actions.decrement)}
      />
    )
  }
}
