import {combineReducers} from 'redux';

const time = (state = { minutesRemaining : 25, secondsRemaining: 0}, action) => {
  switch(action.type) {
        case "SET_TIME" : {
          return {
            minutesRemaining: action.minutes,
            secondsRemaining: action.seconds
          }
        }
        case "BUMP_FIVE" : {
          return {
            ... state,
            minutesRemaining: state.minutesRemaining + 5
          }
        }
        case "TIMER_TICK":
        {
          var secondsRemaining = state.secondsRemaining -1;
          var minutesRemaining = state.minutesRemaining;
          if(secondsRemaining < 0){
            minutesRemaining--;
            secondsRemaining = 59;
          }
          if(minutesRemaining < 0){
            minutesRemaining = 0;
            secondsRemaining = 0;
          }

          return {
            ... state,
            minutesRemaining,
            secondsRemaining
          }
        }
      default: return state;
  }
}

const timerRunning = (state = {}, action) => {
  switch(action.type){
    case "START_TIMER":
      return { startTimer: true, stopTimer: false};
    case "STOP_TIMER":
      return { startTimer: false,  stopTimer: true};
    case "TIMER_STARTED":
      return { timerStarted: true, startTimer: false,  stopTimer: false}
    case "TIMER_STOPPED":
      return { timerStarted: false, startTimer: false,  stopTimer: false}
    default : return state;
  }
}

const loggingReducer = (state = "no state", action) => {
  console.log(action)
  return state;
}
export default combineReducers({time, timerRunning, loggingReducer});
