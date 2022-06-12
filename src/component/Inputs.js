import React, { Component } from 'react'
import Input from '../base-component/Input'
import countries from "../countries.json"
import "../style/component/inputs.css"

export default class Inputs extends Component {
  render() {
    return (
      <div className='input-container'> 
        {/* <div className='header-container'>
          <span className='header'>Card List Component</span>
        </div> */}
        <div>
          <Input 
            disabled={false}
            type="email"
            label="E-mail"
            placeholder="E posta adresiniz"
          />
          <Input 
            disabled={true}
            type="email"
            label="E-mail (Disabled)"
            placeholder="E posta adresiniz"
          />
        </div>
        <div>
          <Input 
           disabled={false}
           type="phone"
           label="Telefon"
           options={countries}
           placeholder="Telefon numaranız"
          />
          <Input 
           disabled={true}
           type="phone"
           label="Telefon (Disabled)"
           options={countries}
           placeholder="Telefon numaranız"
          />
        </div>
        <div>
          <Input 
            disabled={false}
            type="iban"
            placeholder="IBAN"
            label="IBAN"
          />
          <Input 
            disabled={true}
            type="iban"
            placeholder="IBAN"
            label="IBAN (Disabled)"
          />
        </div>
      </div>
    )
  }
}
