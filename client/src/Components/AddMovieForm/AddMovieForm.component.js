import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './AddMovieForm.component.css'
import { SearchResultsListItem } from '../SearchResultsListItem/SearchResultsListItem.component'
import { MoviesService } from '../../Services/movies.service'

export class AddMovieForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      alternative_titles: [],
      year: '',
      image: '',
      rating: '',
      actors: [],
      genre: []
    }
  }

  // default image: http://media.comicbook.com/files/img/default-movie.png

  handleInputChange = (e, inputName) => {
    const value = e.target.value
    switch (inputName) {
      case 'title':
        this.setState({ title: value })
        break
      case 'alternative_titles':
        this.setState({ alternative_titles: value })
        break
      case 'year':
        this.setState({ year: value })
        break
      case 'image':
        this.setState({ image: value })
        break
      case 'rating':
        this.setState({ rating: value })
        break
      case 'actors':
        this.setState({ actors: [...this.state.actors, value] })
        break
      case 'genre':
        this.setState({ genre: [...this.state.genre, value] })
        break
      default:
        return
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    MoviesService.addMovie(this.state)
  }

  render() {
    const { title, alternative_titles, year, image, rating, actors, genre } = this.state

    return (
      <div className='form__modal'>
        <span className='form__modal--close-btn' onClick={ this.props.closeForm }>X</span>
        <div className='form__modal--container'>
          <h1 htmlFor="movie-form">Add a new movie</h1>
          <Form onSubmit={ (e) => this.handleSubmit(e) } className='form__element'>
            <Form.Field className='form__element-title'>
              <label htmlFor="movie-title">Title</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'title') }
                     value={ title }/>
            </Form.Field>
            <Form.Field className='form__element-alternative-titles'>
              <label htmlFor="movie-alternative-titles">Alternatives Title</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'alternative_titles') }
                     value={ alternative_titles }/>
            </Form.Field>
            <Form.Field className='form__element-year'>
              <label htmlFor="movie-year">Year</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'year') }
                     value={ year }/>
            </Form.Field>
            <Form.Field className='form__element-image'>
              <label htmlFor="movie-image">Image</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'image') }
                     value={ image }/>
            </Form.Field>
            <Form.Field className='form__element-rating'>
              <label htmlFor="movie-rating">Give it a rate</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'rating') }
                     value={ rating }/>
            </Form.Field>
            <Form.Field className='form__element-genre'>
              <label htmlFor="movie-tite">Genre</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'genre') }
                     value={ genre }/>
            </Form.Field>
            <Form.Field className='form__element-actors'>
              <label htmlFor="movie-actors">Actors</label>
              <input type="text"
                     onChange={ (e, inputName) => this.handleInputChange(e, 'actors') }
                     value={ actors }/>
            </Form.Field>
            <Button className='form__element-btn' type="submit">Submit</Button>
          </Form>
          <div className='form__modal-movie-preview'>
            <div>Preview</div>
            <SearchResultsListItem movie={ this.state }/>
          </div>
        </div>
      </div>
    )
  }
}
