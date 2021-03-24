import React from 'react';
import ButtonAct from './buttonAct.js';
import ButtonNum from './buttonNum.js';

const Buttons = (props) => {
  return (
    <div>
<div className="button-row">
      <ButtonAct label={'AC'} Click={props.Click}/>
      <ButtonAct label={'C'} Click={props.Click}/>
    </div>
    <div className="button-row">
      <ButtonNum label={'7'} Click={props.Click}/>
      <ButtonNum label={'8'} Click={props.Click}/>
      <ButtonNum label={'9'} Click={props.Click}/>
      <ButtonAct label={'*'} Click={props.Click}/>
    </div>
    <div className="button-row">
      <ButtonNum label={'4'} Click={props.Click}/>
      <ButtonNum label={'5'} Click={props.Click}/>
      <ButtonNum label={'6'} Click={props.Click}/>
      <ButtonAct label={'-'} Click={props.Click}/>
    </div>
    <div className="button-row">
      <ButtonNum label={'1'} Click={props.Click}/>
      <ButtonNum label={'2'} Click={props.Click}/>
      <ButtonNum label={'3'} Click={props.Click}/>
      <ButtonAct label={'+'} Click={props.Click}/>
    </div>
    <div className="button-row">
      <ButtonNum label={'0'} Click={props.Click} />
      <ButtonNum label={'.'} Click={props.Click}/>
      <ButtonAct label={'='} Click={props.Click}/>
      <ButtonAct label={'/'} Click={props.Click}/>
    </div>
    </div>
  )
}

export default Buttons;