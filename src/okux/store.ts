import { EventEmitter } from 'eventemitter3'

export class Store extends EventEmitter {
  private count: number
  constructor(dispatcher) {
    super()
    this.count = 0
    dispatcher.on("countUp", this.onCountUp.bind(this))
  }
  getCount() {
    return this.count
  }
  onCountUp(count) {
    this.count = count
    this.emit("change!")
  }
}