import React from 'react'
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