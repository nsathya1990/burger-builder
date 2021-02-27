import React from 'react';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={(event)=>this.inputChangedHandler(event)}
        />
      );
      break;
    case 'textArea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={(event)=>this.inputChangedHandler(event)}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={(event)=>this.inputChangedHandler(event)}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
