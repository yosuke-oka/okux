import * as React from 'react'
import { createStore } from './store'
import { Counter } from '../Counter'
import { counter } from '../reducers'
import * as actions from '../actions'

const store = createStore(counter)

const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  }
)

const mapStateToProps = (state) => ({
  value: state,
})

const CounterContainer = (props) => {
  console.log(props)
  return (
    <Counter value={props.value} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
  )
}

//type MapState = (state: any) => { [key]:String }
const connect = (mapState, mapDispatch) => {
  return (BaseComponent) => {
    return class extends React.Component<any, any,> {
      private newProps
      constructor(props) {
        super(props)
        store.on('actionDone', () => {
          this._onChange()
        })
        const dispatch = (action) => store.getDispatcher().emit('action', action)
        this.newProps = {
           ...this.props,
           ...mapState(store.getState()),
           ...mapDispatch(dispatch),
          }
      }
      _onChange() {
        const dispatch = (action) => store.getDispatcher().emit('action', action)
        //this.newProps = { ...this.props, ...mapState(store.getState())}
        this.newProps = {
           ...this.props,
           ...mapState(store.getState()),
           ...mapDispatch(dispatch),
          }
        this.setState(this.newProps)
      }
      render() {
        return <BaseComponent { ...this.newProps }/>
      }
    }
  }
}

export const OkuxApp = connect(mapStateToProps, mapDispatchToProps)(CounterContainer)


/// 過去の産物
// interface CounterState {
//   value: number
// }
// export class OkuxApp extends React.Component<{}, CounterState> {
//   constructor(props) {
//     super(props)
//     this.state = { value: store.getState() }
//     store.on('actionDone', () => {
//       this._onChange()
//     })
//   }
//   _onChange() {
//     this.setState({ value: store.getState()})
//   }
//   dispatch(action) {
//     store.getDispatcher().emit('action', action())
//   }
//   render() {
//     return (
//       <Counter
//         value={this.state.value}
//         onIncrement={() => this.dispatch(actions.increment)}
//         onDecrement={() => this.dispatch(actions.decrement)}
//       />
//     )
//   }
// }