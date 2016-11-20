import React, {Component} from 'react';
import DisplayScreen from '../components/DisplayScreen';
import CalcBtns from '../components/CalcBtns';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      calculation: [],
      currentNum: 0,
      currentSign: null,
      numDisplay: [],
      total: 0
    }

    this.onNumClick = this.onNumClick.bind(this);
    this.fullClear = this.fullClear.bind(this);
    this.miniClear = this.miniClear.bind(this);
    this.onSignClick = this.onSignClick.bind(this);
    this.onEqualClick = this.onEqualClick.bind(this);
  }

  calculateTotal() {
    let calculated = eval(this.state.calculation.join(''))
    console.log(calculated)
    this.setState({
      total: calculated
    })
  }

  updateCalcEqual(prevState) {
    this.setState({
      calculation: [...prevState.calculation, parseFloat(prevState.currentNum)]
    }, () => {
      console.log(this.state);
      this.calculateTotal();
    })
  }

  updateCalcSign(prevState) {
    let floatDisplay = parseFloat(prevState.numDisplay.join(''))
    if (this.state.total === 0) {
      this.setState({
        calculation: [...prevState.calculation, floatDisplay, prevState.currentSign],
        numDisplay: []
      }, () => console.log(this.state));
    } else {
      this.setState({
        calculation: [...prevState.total, prevState.currentSign],
        total: 0,
        numDisplay: []
      }, () => console.log(this.state));
    }
  }

  updateDisplay(prevState) {
    this.setState({
      numDisplay: [...prevState.numDisplay, prevState.currentNum]
    }, () => console.log(this.state));
  }

  onNumClick(n) {
    this.setState({
      currentNum: n
    }, () => this.updateDisplay(this.state));
  }

  onSignClick(n) {
    this.setState({
      currentSign: n
    }, () => this.updateCalcSign(this.state));
  }

  onEqualClick() {
    this.updateCalcEqual(this.state);
  }

  fullClear() {
    this.setState({
      calculation: [],
      currentNum: 0,
      numDisplay: [],
      currentSign: null,
      total: 0
    }, () => console.log(this.state));
  }

  miniClear() {
    let updatedDisplay = this.state.numDisplay.slice(0, this.state.numDisplay.length - 1);
    let updatedCalc = this.state.calculation.slice(0, this.state.calculation.length - 1);

    if (this.state.numDisplay.length === 0) {
      this.setState({
        calculation: updatedCalc
      }, () => console.log(this.state))
    } else {
      this.setState({
        numDisplay: updatedDisplay,
      }, () => console.log(this.state));
    }
  }

  render() {
    return (
      <div>
        <DisplayScreen total={this.state.total}
                       calculation={this.state.calculation}
                       numDisplay={this.state.numDisplay}
                       currentSign={this.state.currentSign} />

        <CalcBtns onNumClick={this.onNumClick}
                  fullClear={this.fullClear}
                  miniClear={this.miniClear}
                  onSignClick={this.onSignClick}
                  onEqualClick={this.onEqualClick} />
      </div>
    );
  }
}

export default Calculator;
