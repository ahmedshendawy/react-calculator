import React from 'react';
import './App.css';
import OutputScreen from './outputScreen.js';
// import ButtonNum from './buttonNum.js';
// import ButtonAct from './buttonAct.js';
import Buttons from './buttons.js';

class Calculator extends React.Component {

  constructor() {
  super();
  this.state = {
    question: '',
    answer: ''
  }

  this.Click = this.Click.bind(this);
}

 Click(event){

  const value = event.target.value;

  switch (value) {
    case '=': {

      if(this.state.question!=='')
      {
        var ans='';
        try
        {
          ans = eval(this.state.question);
        }catch(err)
        {
          this.setState({answer:"Math Error"});
        }
        if(ans===undefined)
          this.setState({answer:"Math Error"});
        else
          this.setState({ answer: ans , question: ''});
        break;
      }
    }
  case 'AC': {
      this.setState({ question: '', answer: '' });
      break;
    }

  case 'C': {
    var str = this.state.question;
    str = str.substr(0,str.length-1);
    this.setState({question: str});
    break;
  }

  default: {
      this.setState({ question: this.state.question += value})
      break;
    }
  }
}

    render()
    {
    return (
      <div className="frame">
        <div style={{ fontSize:"300 18px/1.6", fontFamily: `Source Sans Pro,sans-serif`,marginBottom:"10px"}}>Calculator</div>
      {/* <CalculatorTitle value="Calculator"/> */}
    <div class="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <Buttons Click = {this.Click} />

    
    </div>
    </div>
    );
  }

}

export default Calculator;