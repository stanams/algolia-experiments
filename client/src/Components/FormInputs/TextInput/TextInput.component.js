import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.component.css'

export const TextInput = ({ value, onChange, inputType }) => {
  return(
    <div className='form__input'>
      <label className='form__input--label' htmlFor="text">{ inputType }</label>
      <input type='text' value={ value } onChange={ onChange }/>
    </div>
  )
}

TextInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array]),
  onChange: PropTypes.func,
  inputType: PropTypes.string
}