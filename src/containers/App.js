import React, {Component} from 'react';
import Calculator from './Calculator';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="calc-container container-fluid col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <Calculator />
      </div>
    );
  }
}

export default App;
