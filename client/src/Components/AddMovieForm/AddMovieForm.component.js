import React from 'react'
import PropTypes from 'prop-types'
import './AddMovieForm.component.css'
import MoviesService from '../../Services/movies.service'

import {
  Button,
  Rating
} from 'semantic-ui-react'

import {
  SearchResultsListItem,
  SelectInput,
  TextInput
} from '../index.components'

export class AddMovieForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        title: '',
        alternative_titles: [],
        year: 2017,
        image: 'http://media.comicbook.com/files/img/default-movie.png',
        rating: 0,
        actors: '',
        genre: ''
    }
  }

  handleInputChange = (e, inputName) => {
    const value = e.target.value
    switch (inputName) {
      case 'title':
        this.setState({ title: value })
        break
      case 'alternative_titles':
        this.setState({ alternative_titles: value })
        break
      case 'image':
        this.setState({ image: value })
        break
      case 'actors':
        this.setState({ actors: value })
        break
      default:
        return
    }
  }

  handleSelectYearChange = (value) => {
    this.setState({ year: value })
	}

  handleSelectGenreChange = (value) => {
    this.setState({ genre: value })
	}
  
  handleRate = (e, { rating }) => {
    this.setState({ rating: rating })
    console.log(rating)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    MoviesService.addMovie(this.state)
    this.props.closeForm()
  }

  render() {
    const { title, alternative_titles, year, image, actors, genre, rating } = this.state
    console.log(this.state)
    return (
      <div className='form__modal'>
        <div className='form__modal--container'>
          <span className='form__modal--close-btn' onClick={ this.props.closeForm }>
            <i className="fa fa-times fa-3" aria-hidden="true"></i>
          </span>
          <h1 htmlFor="movie-form">Add a new movie</h1>
          <form onSubmit={ (e) => this.handleSubmit(e) } className='form__element'>
            <TextInput className='form__element-title'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'title') }
                       value={ title }
                       inputType='Title'/>
            <SelectInput className='form__element-year'
                         label='Year'
                         yearValue={ year }
                         handleSelectYearChange={ this.handleSelectYearChange } />
            <TextInput className='form__element-alternative-titles'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'alternative_titles') }
                       value={ alternative_titles }
                       inputType='Alternative Titles' />
            <TextInput className='form__element-actors'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'actors') }
                       value={ actors }
                       inputType='Actors'/>
            <SelectInput className='form__element-genre'
                         label='Genre'
                         genreValue={ genre }
                         handleSelectGenreChange={ this.handleSelectGenreChange } />
            <TextInput className='form__element-image'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'image') }
                       value={ image }
                       inputType='Image URL'/>
            <div className='form__element-rating'>
              Rating: <Rating maxRating={5} rating={ rating } onRate={ this.handleRate }/>
            </div>
            <Button className='form__element-btn' type="submit">Submit</Button>
          </form>
          <div className='form__modal-movie-preview'>
            <div className='form__modal-movie-preview-title'>Preview</div>
            <SearchResultsListItem from='form' movie={ this.state }/>
          </div>
        </div>
      </div>
    )
  }
}

AddMovieForm.propTypes = {
  closeForm: PropTypes.func,
  addMovie: PropTypes.func
}
