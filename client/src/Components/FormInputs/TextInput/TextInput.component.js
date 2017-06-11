import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.component.css'
import { errorsObjToString } from '../../../Core/utils'
import classNames from 'classnames'

export const TextInput = ({ value, onChange, inputType, errors = {} }) => {
  const classnames = classNames('form__input', { 'form__input-image': inputType.includes('Image') })

  return(
    <div className={classnames}>
      <label className='form__input--label' htmlFor="text">{ inputType }</label>
      <input type='text' value={ value } onChange={ onChange }/>
      <span className='error-message'>{ errors && errorsObjToString(errors) }</span>
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