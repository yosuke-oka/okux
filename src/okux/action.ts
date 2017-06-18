export class ActionCreator {
  private dispatcher: any
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  increment(value) {
    this.dispatcher.emit("increment", value)
  }
  decrement(value) {
    this.dispatcher.emit("decrement", value)
  }
}