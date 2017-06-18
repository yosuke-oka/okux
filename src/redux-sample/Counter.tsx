import * as React from 'react'

export const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    Clicked: {value} times
        {' '}
    <button onClick={onIncrement}>
      +
        </button>
    {' '}
    <button onClick={onDecrement}>
      -
        </button>
  </div>
)