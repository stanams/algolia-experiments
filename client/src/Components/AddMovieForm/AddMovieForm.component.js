import React from 'react'
import PropTypes from 'prop-types'
import './AddMovieForm.component.css'
import { connect } from 'react-redux'
import { validateState } from '../../Core/utils'
import SearchResultsListItem from '../SearchResultsListItem/SearchResultsListItem.component'

import {
  Button,
  Rating
} from 'semantic-ui-react'

import {
  SelectInput,
  TextInput
} from '../index.components'

import {
  addMovie
} from '../../Actions/movies.actions'

class AddMovieForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newMovie: {
        title: '',
        alternative_titles: [],
        year: 2017,
        image: 'http://media.comicbook.com/files/img/default-movie.png',
        rating: 0,
        actors: '',
        genre: ''
      },
      validation: {
        title: {
          rules: {
            required: true
          }  
        },
        alternative_titles: {
          rules: {
            arr: true,
            required: true
          }
        },
        year: {
          rules: {
            require: true
          } 
        },
        actors: {
          rules: {
            required: true
          }
        },
        genre: {
          rules: {
            required: true
          }
        }
      }
    }
  }

  handleInputChange = (e, inputName) => {
    const value = e.target.value
    switch (inputName) {
      case 'title':
        this.setState({ newMovie: {...this.state.newMovie, title: value} })
        break
      case 'alternative_titles':
        this.setState({ newMovie: {...this.state.newMovie, alternative_titles: value} })
        break
      case 'image':
        this.setState({ newMovie: {...this.state.newMovie, image: value} })
        break
      case 'actors':
        this.setState({ newMovie: {...this.state.newMovie, actors: value} })
        break
      default:
        return
    }
  }

  handleSelectYearChange = (value) => {
    this.setState({ newMovie: {...this.state.newMovie, year: value} })
	}

  handleSelectGenreChange = (value) => {
    this.setState({ newMovie: {...this.state.newMovie, genre: value} })
	}
  
  handleRate = (e, { rating }) => {
    this.setState({ newMovie: {...this.state.newMovie, rating} })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { isValid, validatedState } = validateState(this.state.newMovie, this.state.validation)

    if (isValid) {
      this.props.addMovie(this.state.newMovie)
      this.props.closeForm()
    } else {
      this.setState({...validatedState});
    }
  }

  render() {
    const { title, alternative_titles, year, image, actors, genre, rating } = this.state.newMovie
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
                       errors={this.state.validation.title.errors}
                       inputType='Title'/>
            <SelectInput className='form__element-year'
                         label='Year'
                         errors={this.state.validation.year.errors}
                         yearValue={ year }
                         handleSelectYearChange={ this.handleSelectYearChange } />
            <TextInput className='form__element-alternative-titles'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'alternative_titles') }
                       errors={ this.state.validation.alternative_titles.errors }
                       value={ alternative_titles }
                       inputType='Alternative Titles'/>
            <TextInput className='form__element-actors'
                       onChange={ (e, inputName) => this.handleInputChange(e, 'actors') }
                       errors={ this.state.validation.actors.errors }
                       value={ actors }
                       inputType='Actors'/>
            <SelectInput className='form__element-genre'
                         label='Genre'
                         errors={ this.state.validation.genre.errors }
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
            <SearchResultsListItem from='form' movie={ this.state.newMovie }/>
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

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch) => ({
  addMovie(movie) {
    dispatch(addMovie(movie))
  }
})

export { AddMovieForm as PureAddMovieForm };
export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm)
