import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pomodoroReducers from './reducers.js';
import ContainerView from './ContainerView.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import StopWatch from './background/StopWatch.js';
import Pomodoro from  './background/Pomodoro.js';

let store = createStore(pomodoroReducers);

let stopWatch = new StopWatch(store);
let pomodoro = new Pomodoro(store);

import NumberDisplay from './TimeDisplay.jsx'


ReactDOM.render(
    <Provider store={store}>
      <ContainerView />
    </Provider>,
    document.getElementById('main')
)
