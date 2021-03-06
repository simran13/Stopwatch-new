import React from 'react';

const Timer = (props) => {
    return (
        <div className="timer">
        <span className="timer1">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="timer2">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="timer3">
          {("0" + ((props.time / 10) % 100)).slice(-2)}
        </span>
      </div>
        
    );
};

export default Timer;