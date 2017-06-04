import React from 'react'
import './TextInput.component.css'

export const TextInput = ({ value, onChange, inputType }) => {
  return(
    <div className='form__input'>
      <label className='form__input--label' htmlFor="text">{ inputType }</label>
      <input type='text' value={ value } onChange={ onChange }/>
    </div>
  )
}
