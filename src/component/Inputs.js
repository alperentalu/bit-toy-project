import React, { Component } from 'react'
import Input from '../base-component/Input'

export default class Inputs extends Component {
  render() {
    return (
      <> 
        <div>
          <Input 
            type="email"
          />
        </div>
        <div>
          <Input 
           type="phone"
           options={[]}
          />
        </div>
        <div>
          <Input 
            type="iban"
          />
        </div>
      </>
    )
  }
}
