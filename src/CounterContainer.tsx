import * as React from 'react'
import { Counter } from './Counter'
import * as actions from './actions'

export const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  }
)

export const mapStateToProps = (state) => ({
  value: state,
})

export const CounterContainer = (props) => (
  <Counter value={props.value} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
)