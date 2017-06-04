import React from 'react'
import { Button, Rating } from 'semantic-ui-react'
import './AddMovieForm.component.css'
// import { SearchResultsListItem } from '../SearchResultsListItem/SearchResultsListItem.component'
import { MoviesService } from '../../Services/movies.service'
import { SelectInput } from '../FormInputs/SelectInput/SelectInput.component'
import { TextInput } from '../FormInputs/TextInput/TextInput'

export class AddMovieForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      alternative_titles: [],
      year: '',
      image: '',
      rating: '',
      actors: '',
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
    console.log(value)
    this.setState({ genre: value })
	}

  handleSubmit = (e) => {
    e.preventDefault()
    MoviesService.addMovie(this.state)
  }

  handleRate = (e, { rating }) => this.setState({ rating })

  render() {
    const { title, alternative_titles, year, image, rating, actors, genre } = this.state

    return (
      <div className='form__modal'>
        <span className='form__modal--close-btn' onClick={ this.props.closeForm }>X</span>
        <div className='form__modal--container'>
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
              Rating: <Rating maxRating={5} onRate={ this.handleRate }/>
            </div>
            <Button className='form__element-btn' type="submit">Submit</Button>
          </form>
          { /*add prview here*/ }
          {/*<div className='form__modal-movie-preview'>
            <div>Preview</div>
            <SearchResultsListItem movie={ this.state }/>
          </div>*/}
        </div>
      </div>
    )
  }
}
