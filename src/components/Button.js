import React from 'react';
import '../styles/Button.css';


const Button = (props) => (
  <button className={props.klass} onClick={() => props.clickHandler(props.text)}>{props.text}</button>
)

Button.propTypes = {
  klass: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
}

export default Button;
