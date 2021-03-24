import React from 'react';

const ButtonNum = (props) => {
  return (
    <input
    className="buttonN"
      type="button"
      value={props.label}
      onClick = {props.Click}
    />
  );
}

export default ButtonNum;