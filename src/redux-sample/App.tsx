import * as React from 'react'
import { connect } from 'react-redux'
import { Counter } from './Counter'
import * as actions from './actions'

const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  }
)

const mapStateToProps = (state) => ({
  value: state,
})

const CounterContainer = (props) => (
  <Counter value={props.value} onIncrement={ props.onIncrement} onDecrement={props.onDecrement}/>
)

export const App = connect(mapStateToProps,mapDispatchToProps)(CounterContainer)