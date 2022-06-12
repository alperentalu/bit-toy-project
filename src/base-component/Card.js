import React, { Component } from "react";
import "../style/base-component/card.css"
export default class Card extends Component {
  render() {
    const { name, shortName, icon } = this.props;
    return (
      <div className="card-container">
        <div className="icon-container">
            {/* <img src={icon} alt="coin-icon" /> */}
        </div>
        <div className="text-container">
        <div>
          <span className="name">{name}</span>
        </div>
        <div>
          <span className="short-name">{shortName}</span>
        </div>
        </div>
      </div>
    );
  }
}
