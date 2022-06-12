import React, { Component } from 'react'
import '../style/base-component/input.css'

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
  }

  render() {

    const { type, placeholder, options } = this.props;


    return (
      <div>
        { ['email', 'iban'].includes(type) ? 
          <input type="text" id={`${type}-input`} onChange={this.textInputOnChange}/>
          :
          <div className="phone-input flex-center">
            <div className="selections">
              options forEach
            </div>
            <input type="phone" />
          </div>
        }
      </div>
    )

  }
}
