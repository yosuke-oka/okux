import { EventEmitter } from 'eventemitter3'

export class Store extends EventEmitter {
  private value: number
  constructor(dispatcher) {
    super()
    this.value = 0
    dispatcher.on("increment", this.onIncrement.bind(this))
    dispatcher.on("decrement", this.onDecrement.bind(this))
  }
  getValue() {
    return this.value
  }
  onIncrement() {
    this.value += 1
    this.emit("increment")
  }
  onDecrement() {
    this.value -= 1
    this.emit("decrement")
  }
}