import React, { Component } from "react";
import "../style/base-component/button.css";
export default class Button extends Component {

  render() {
    const { disabled, hover, focus, color } = this.props;
    return (
      <div>
        <button
          autoFocus={focus}
          id="button-el"
          tabIndex={1}
          style={color === "orange" ? hover ? {backgroundColor: '#FF6C1D'} : {} : hover ? {backgroundColor: '#239831'} : {} }
          className={color === "orange" ? "orange-button" : "green-button"}
          disabled={disabled ? true : false}
        >
          {color === "orange" ? "LOGIN" : "VALIDATE"}
        </button>
      </div>
    );
  }
}
