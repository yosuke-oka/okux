import * as React from 'react'

interface CounterProps {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void,
}

export const Counter = ({value, onIncrement, onDecrement}: CounterProps) => (
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