import TimeDisplay from './TimeDisplay.jsx';
import React, {PropTypes, Component} from 'react';
import ActionButtons from './ActionButtons.jsx';

const ContainerView = (props, {store}) => {
  return (
    <div className='containerView'>
    <div className='container'>
      <div className="jumbotron heading">
        <h1 className="">
          MySweet! Pomodoro Timer
        </h1>
      </div>
      <div className='row'>
        <div className="col-xs-12 col-sm-3 col-md-5" />

        <div className="col-xs-12 col-sm-6 col-md-2">
          <TimeDisplay />
        </div>

        <div className="col-xs-12 col-sm-3 col-md-5" />
      </div>
      <hr />
      <div className="row">
        <ActionButtons />
      </div>
    </div>
    </div>
  )
}

ContainerView.contextTypes= {
  store: React.PropTypes.object
}

export default ContainerView;
