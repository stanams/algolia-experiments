import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './AddMovieForm.component.css'

export const AddMovieForm = ({closeForm}) => {

  return (
    <div className='form__modal'>
      <span className='form__modal--close-btn' onClick={closeForm}>X</span>
      <div className='form__modal--container'>
        <h1 htmlFor="movie-form">Add a new movie</h1>
        <Form>
          <Form.Field>
            <label htmlFor="movie-title">Title</label>
            <input type="text"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-alternatives-title">Alternatives Title</label>
            <input type="text"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-year">Year</label>
            <input type="text"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-image">Image</label>
            <input type="url"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-rate">Give it a rate</label>
            <input type="text"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-tite">Actors</label>
            <input type="text"/>
          </Form.Field>
          <Form.Field>
            <label htmlFor="movie-tite">Genre</label>
            <input type="text"/>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  )   
}
