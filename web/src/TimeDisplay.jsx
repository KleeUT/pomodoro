import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

var NumberDisplay = (props) => {
  return (
    <span>
      {props.value}
    </span>
  );
};

var TimeDisplay = ({minutes, seconds}) => {
  return (
    <div className='timeDisplay'>
        {minutes.split("").map(char => {
          return <NumberDisplay value={char} />
        })}
        :
        {seconds.split("").map(char => {
          return <NumberDisplay value={char} />
        })}
    </div>
  );
};

TimeDisplay.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string
}

var mapStateToProps = (state) => {
  return {
    minutes: formatTwoDigitAbsolute(state.time.minutesRemaining),
    seconds: formatTwoDigitAbsolute(state.time.secondsRemaining)
  }
}

var formatTwoDigitAbsolute = (numberValue) =>{
  var absValue = Math.abs(numberValue);
  if(absValue < 10){
    return `0${absValue}`;
  }
  return absValue.toString()
};
var mapDispatchToProps = (dispatch) =>{
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay);
