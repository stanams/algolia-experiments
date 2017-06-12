import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Icon
} from 'semantic-ui-react'
import './AddMovieButton.component.css'

export const AddMovieButton = ({ openForm }) => (
    <div onClick={ openForm }>
      <Button primary animated className="btn--semantic-ui">
        <Button.Content hidden>Add a movie</Button.Content>
        <Button.Content visible>
          <Icon name='add' />
        </Button.Content>
      </Button>
    </div>
)   

AddMovieButton.propTypes = {
  openForm: PropTypes.func
}