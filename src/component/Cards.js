import React, { Component } from 'react'
import Card from "../base-component/Card"
import "../style/component/cards.css"
const cardList = [
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  },
  {
    icon: "",
    name: "Coin Name Here",
    shortName: "CHN"
  }
]
export default class Cards extends Component {
  render() {
    return (
      <div className="card-list">
        <div className='header-container'>
          <span className='header'>Card List Component</span>
        </div>
        {cardList.map((item,index) => {
          return <Card key={index} name={item.name} shortName={item.shortName} icon={item.icon}/>
        })}
      </div>
    )
  }
}
