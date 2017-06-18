export class ActionCreator {
  private dispatcher: any
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  increment() {
    this.dispatcher.emit({ type: 'INCREMENT' })
  }
  decrement() {
    this.dispatcher.emit("decrement")
  }
}