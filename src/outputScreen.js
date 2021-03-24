import React from 'react';

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <div className="screen-row"><input type="text" readOnly value = {props.question}/></div>
      <div className="screen-row"><input type="text" readOnly value = {props.answer}/></div>
    </div>
  )
}

export default OutputScreen;