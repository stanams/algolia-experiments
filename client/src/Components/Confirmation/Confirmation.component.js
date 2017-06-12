import React from 'react'
import PropTypes from 'prop-types'
import './Confirmation.component.css'

export const Confirmation = ({ hideConfirmationMessage, handleDelete }) => {
  return (
    <div className='confirmation__block'>
      <span className='confirmation__block-question'>Are you sure ?</span>
      <div className='confirmation__block-answers'>
        <div onClick={ handleDelete }>Yes</div>
        <div onClick={ e => hideConfirmationMessage(e) }>No</div>
      </div>
    </div>
  )
}

Confirmation.propTypes = {
  hideConfirmationMessage: PropTypes.func,
  handleDelete: PropTypes.func
}