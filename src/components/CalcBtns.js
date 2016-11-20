import React from 'react';
import Button from '../components/Button';

const CalcBtns = (props) => (
  <div className="calc-buttons col-xs-12">
    <div className="row first-row">
      <Button text="AC" klass="col-xs-3 ac" clickHandler={props.fullClear}/>
      <Button text="CE" klass="col-xs-3 ce" clickHandler={props.miniClear} />
      <Button text="/" klass="col-xs-3 sign" clickHandler={props.onSignClick}/>
      <Button text="*" klass="col-xs-3 sign" clickHandler={props.onSignClick}/>
    </div>
    <div className="row second-row">
      <Button text="7" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="8" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="9" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="-" klass="col-xs-3 sign" clickHandler={props.onSignClick}/>
    </div>
    <div className="row third-row">
      <Button text="4" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="5" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="6" klass="col-xs-3 num" clickHandler={props.onNumClick} />
      <Button text="+" klass="col-xs-3 sign" clickHandler={props.onSignClick}/>
    </div>

    <div className="row">
      <Button text="=" klass="equal-sign col-xs-3 col-xs-push-9" clickHandler={props.onEqualClick}/>
      <div className="col-xs-9 col-xs-pull-3">
        <div className="row fourth-row">
          <Button text="1" klass="col-xs-4 num" clickHandler={props.onNumClick} />
          <Button text="2" klass="col-xs-4 num" clickHandler={props.onNumClick} />
          <Button text="3" klass="col-xs-4 num" clickHandler={props.onNumClick} />
        </div>

        <div className="row fourth-row">
          <Button text="0" klass="col-xs-8 num" clickHandler={props.onNumClick} />
          <Button text="." klass="col-xs-4 num" clickHandler={props.onNumClick} />
        </div>
      </div>
    </div>
  </div>
)

CalcBtns.propTypes = {
  onNumClick: React.PropTypes.func.isRequired,
  onSignClick: React.PropTypes.func.isRequired,
  onEqualClick: React.PropTypes.func.isRequired,
  fullClear: React.PropTypes.func.isRequired,
  miniClear: React.PropTypes.func.isRequired,
}

export default CalcBtns;
