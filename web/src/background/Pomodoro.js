import {stopTimer} from '../actions/actions.js';
export default class Pomodoro {
  constructor(store){
    this.store = store;
    this.unsubscribe = store.subscribe(this._stateUpdated.bind(this));
  }

  _stateUpdated(){
    var state = this.store.getState();
    if(state.timerRunning.timerStarted && state.time.minutesRemaining < 1 && state.time.secondsRemaining < 1){
      this.store.dispatch(stopTimer);
    }
  }
}
