import React, { Component } from 'react'
import '../style/base-component/input.css'
import CountryToFlag from "../utilities/CountryToFlag"

export default class Input extends Component {

  textInputOnChange = (event) => {
    
    if(this.props.type === 'iban') {

      const isValidIban = /\b[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?!(?:[ ]?[0-9]){3})(?:[ ]?[0-9]{1,2})?\b/gm.test(event.target.value)

      const el = document.getElementById('iban-input')

      if(!isValidIban) {
        el.classList.add('error')
      } else {
        el.classList.remove('error')
        el.classList.add('confirmed')
      }
    }

    if(this.props.type === "email") {

    const el = document.getElementById('email-input')

    const isValidEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(event.target.value);

    if(!isValidEmail) {
      el.classList.add('error')
      } else {
      el.classList.remove('error')
      el.classList.add('confirmed')
      }
    }

    if(this.props.type === "phone") {

      const el = document.getElementById('phone-input')

      const isValidPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(event.target.value);

      if(!isValidPhone) {
        el.classList.add('error')
        } else {
        el.classList.remove('error')
        el.classList.add('confirmed')
        }

    }  
  }

  render() {

    const { type, placeholder, options, label, disabled } = this.props;


    return (
      <div className='input-container'>
        { ['email', 'iban'].includes(type) ? 
        <div>
        <label>{label}</label>
        <input disabled={disabled} className={`${type}-input`} placeholder={placeholder} type="text" id={`${type}-input`} onChange={this.textInputOnChange}/>
        </div>
          :
          <div className="phone-input-container flex-center">
            <label>{label}</label>
            <div id={`${type}-input`} className="selections">
            <select disabled={disabled} className='phone-input-select' name="country">
                    {options.map((item, index) => {
                        return <option selected={item.name === "Turkey" ? "selected" : ""} key={index} value={item.code}><div>{CountryToFlag(item.abbr)}</div>{"+" +item.code}</option>
                    })}
                </select>
            <input  disabled={disabled} placeholder={placeholder} type="phone"  onChange={this.textInputOnChange} />
            </div>
          </div>
        }
      </div>
    )

  }
}
