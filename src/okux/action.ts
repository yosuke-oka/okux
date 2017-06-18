export class ActionCreator {
  private dispatcher: any
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  increment() {
    this.dispatcher.emit('action', { type: 'INCREMENT' })
  }
  decrement() {
    this.dispatcher.emit("action", { type: 'DECREMENT' })
  }
}