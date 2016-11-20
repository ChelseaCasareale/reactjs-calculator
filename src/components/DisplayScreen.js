import React from 'react';
import '../styles/DisplayScreen.css';


const DisplayScreen = (props) => {
  let currentInput = null;
  let currentCalc = null;

  if (props.total !== 0) {
    currentInput = props.total;
  } else if (props.currentSign !== null && props.numDisplay.length === 0) {
    currentInput = props.currentSign;
  } else if (props.numDisplay.length === 0) {
    currentInput = 0;
  } else {
    currentInput = props.numDisplay;
  }

  (props.calculation.length === 0) ?
    currentCalc = 0 :
    currentCalc = props.calculation

  return (
    <div className="display-screen col-xs-12">
      <div className="current-input col-lg-12">{currentInput}</div>
      <div className="current-calculation col-lg-12">{currentCalc}</div>
    </div>
  );
}

DisplayScreen.propTypes = {
  total: React.PropTypes.number,
  currentSign: React.PropTypes.string,
  numDisplay: React.PropTypes.array,
  calculation: React.PropTypes.array
}

export default DisplayScreen;
