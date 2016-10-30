import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setTimeTo, stopTimer, startTimer, bumpFive} from './actions/actions.js';

const ActionButtons = ({isTimerRunning, start, stop, resetPomodoro, shortBreak, longBreak, bumpFive}) => {
  return (
    <div className="actionButtons">
        <div className={isTimerRunning ? 'visible' : "hidden"}>
          <button className="btn btn-lg btn-danger actionButton" onClick={stop}>Abandon</button>
          <button className="btn btn-warning actionButton" onClick={bumpFive}>Bump 5</button>
        </div>
        <div className={isTimerRunning ? 'hidden' : "visible"}>
          <button className="btn btn-lg btn-primary actionButton" onClick={resetPomodoro}>Pomodoro</button>
          <button className="btn btn-warning actionButton" onClick={shortBreak}>Break 5</button>
          <button className="btn btn-success actionButton" onClick={longBreak}>Break 15</button>
        </div>
    </div>
  )
}

ActionButtons.propTypes= {
  resetPomodoro : PropTypes.func,
  shortBreak : PropTypes.func,
  longBreak : PropTypes.func,
  stop: PropTypes.func,
  bumpFive: PropTypes.func,
  isTimerRunning: PropTypes.bool
}

var mapStateToProps = (state, ownProps) =>{
  return {isTimerRunning: state.timerRunning.timerStarted};
}

var mapDispatchToProps = (dispatch) =>{
  return {
    shortBreak: () =>{
      dispatch(stopTimer);
      dispatch(setTimeTo(56,0));
      dispatch(startTimer);
    },
    longBreak: () =>{
      dispatch(stopTimer);
      dispatch(setTimeTo(15,0));
      dispatch(startTimer);
    },
    resetPomodoro: () =>{
      dispatch(stopTimer);
      dispatch(setTimeTo(25,0));
      dispatch(startTimer);
    },
    bumpFive: () => {
      dispatch(bumpFive);
    },
    stop: () => {
      dispatch(stopTimer);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
