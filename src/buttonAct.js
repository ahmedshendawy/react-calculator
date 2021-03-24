import React from 'react';

const ButtonAct = (props) => {
  return (
    <input
    className="buttonA"
      type="button"
      value={props.label}
      onClick = {props.Click}
    />
  );
}

export default ButtonAct;