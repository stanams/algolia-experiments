import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './SelectInput.component.css'
import { errorsObjToString } from '../../../Core/utils'
import classNames from 'classnames'
import { GENRES, YEARS } from './SelectInput.constants'

export const SelectInput = ({ label, yearValue, genreValue, handleSelectYearChange, handleSelectGenreChange, errors }) => {	

  const classnames = classNames('form__select-input', { 'form__select-input-genre': label.includes('Genre') })

  return (
    <div className={classnames}>
      <label className="form__input--label">{ label }</label>
      {
        label === 'Genre'
        ? <Select multi
                  simpleValue
                  value={ genreValue }
                  placeholder=''
                  options={ GENRES }
                  onChange={ handleSelectGenreChange }  />
        : <Select simpleValue
                  value={ yearValue }
                  placeholder=''
                  options={ YEARS }
                  onChange={ handleSelectYearChange } />
      }
      <span className='error-message'>{errorsObjToString(errors)}</span>
    </div>
  )
}

SelectInput.propTypes = {
  yearValue: PropTypes.number,
  genreValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleSelectYearChange: PropTypes.func,
  handleSelectGenreChange: PropTypes.func
}