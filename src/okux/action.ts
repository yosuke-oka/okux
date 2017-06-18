export class ActionCreator {
  private dispatcher: any
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  countUp(data) {
    this.dispatcher.emit("countup", data)
  }
}