export class ActionCreator {
  private dispatcher: any
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  increment() {
    this.dispatcher.emit("increment")
  }
  decrement() {
    this.dispatcher.emit("decrement")
  }
}