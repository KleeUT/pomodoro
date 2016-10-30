export const setTimeTo = (minutes, seconds) => {
  return {
    type: 'SET_TIME',
    minutes, seconds
  }
}
export const stopTimer = {
  type: 'STOP_TIMER'
}

export const startTimer = {
  type: 'START_TIMER'
}

export const timerStarted = {
  type: "TIMER_STARTED"
}

export const timerStopped = {
  type: "TIMER_STOPPED"
}

export const bumpFive = {
  type: 'BUMP_FIVE'
}

export const timerTick = {
  type: 'TIMER_TICK'
}
