import React, { Component } from 'react'
import Button from '../base-component/Button'
import "../style/component/buttons.css"

export default class Buttons extends Component {
  render() {
    return (
      <div className='button-container'>
        <div className='header-container'>
          <span className='header'>Button Components</span>
        </div>
        <div className='buttons'>
          <span>Normal</span>
        <Button color={"orange"}/>
        <Button color={"green"}/>
        </div>
        <div className='buttons'>
          <span>Hover</span>
        <Button hover={true} color={"orange"}/>
        <Button hover={true} color={"green"}/>
        </div>
        <div className='buttons'>
          <span>Focus</span>
        <Button focus={true} color={"orange"}/>
        <Button focus={true} color={"green"}/>
        </div>
        <div className='buttons'>
          <span>Disable</span>
        <Button disabled={true} color={"orange"}/>
        <Button disabled={true} color={"green"}/>
        </div>
      </div>
    )
  }
}
