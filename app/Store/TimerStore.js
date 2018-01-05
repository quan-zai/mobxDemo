import { observable, action, computed } from 'mobx'

export default class TimerStore {

  @observable isRunning;
  @observable timer;
  @observable startTime;

  @observable laps;

  constructor() {
    this.isRunning = false
    this.timer = 0
    this.laps = [];
  }

  @action plusTime() {
    this.timer += 1
  }

  @action minusTime() {
    if (this.timer === 0) return
    this.timer -= 1
  }
}
