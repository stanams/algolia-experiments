import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './SelectInput.component.css'
import { errorsObjToString } from '../../../Core/utils'
import classNames from 'classnames'

const GENRES = [
  { value: 'drama', label: 'Drama' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'romance', label: 'Romance' },
  { value: 'history', label: 'History' },
  { value: 'animation', label: 'Animation' },
  { value: 'horror', label: 'Horror' },
  { value: 'western', label: 'Western' },
  { value: 'crime', label: 'Crime' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'family', label: 'Family' },
  { value: 'music', label: 'Music' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'science-fiction', label: 'Science Fiction' },
  { value: 'war', label: 'War' }
]

let YEARS = []
for (let i = 2018; i > 1899; i--) {
  YEARS.push(
    { value: i, label: i }
  )
}

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