import React from 'react'
import './AddMovieButton.component.css'
import { Button, Icon } from 'semantic-ui-react'

export const AddMovieButton = () => (
    <div>
      <Button primary animated className="btn--semantic-ui">
        <Button.Content hidden>Add a movie</Button.Content>
        <Button.Content visible>
          <Icon name='add' />
        </Button.Content>
      </Button>
    </div>
)   
