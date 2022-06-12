import React, { Component } from 'react'
import Buttons from '../component/Buttons'
import Cards from "../component/Cards"
import OrderBook from '../component/OrderBook'
import Inputs from '../component/Inputs'
import "../style/page/dashboard.css"

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <div className="paper">
              <Cards/>
          </div>
          <div className="paper">
              <Buttons/>
          </div>
          <div className="paper">
              <OrderBook/>
          </div>
          <div className="paper">
              <Inputs/>
          </div>
      </div>
    )
  }
}
