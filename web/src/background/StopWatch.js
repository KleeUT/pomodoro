import {timerTick, timerStopped, timerStarted} from '../actions/actions.js';
const EVERY_SECOND = 1000;
export default class StopWatch {
  constructor(store){
    this.store = store;
    this.unsubscribe = store.subscribe(this._stateupdated.bind(this));
    this.interval = undefined;
  }

  _start(store){
    this.interval = setInterval(() => {
      this.store.dispatch(timerTick);
    }, 1000);
    this.store.dispatch(timerStarted);
  }

  _stop(){
    clearInterval(this.interval);
    this.store.dispatch(timerStopped);
  }

  _stateupdated(){
    if(this.store.getState().timerRunning.startTimer){
      this._start();
    }

    if (this.store.getState().timerRunning.stopTimer){
      this._stop();
    }
  }

  _publishTicAction(){
    this.store.dispatch(timerTick);
  }
}
