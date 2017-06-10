import React from 'react'
import PropTypes from 'prop-types'
import { Rating, Icon } from 'semantic-ui-react'
import classNames from 'classnames'
import './SearchResultsListItem.component.css'
import { truncate } from '../../Core/utils'
import { connect } from 'react-redux'

import {
  deleteMovie
} from '../../Actions/movies.actions'

import {
  setMessage
} from '../../Actions/app.actions'

class SearchResultsListItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOptimisticallyRemoved: false
    }
  }

  toggleDetails = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  handleDelete = (objectID) => {
    this.props.deleteMovie(this.props.movie.objectID)
    this.setState({isOptimisticallyRemoved: true})
    this.props.setMessage('You\'re movie has been removed!')
    window.scrollTo(0, 0)
  }

  render () {
    const { movie, from } = this.props
    const { isOpen } = this.state
    const classnames = classNames('list__item', {
      'full-content': isOpen
    })

    return (
      !this.state.isOptimisticallyRemoved &&
      <div className={ classnames } onClick={ this.toggleDetails }>
        <div className="list__item--content-light">
          <img className='list__item--content-light--image' src={ movie.image } alt=""/>
          <div className="item--text">
            <span className="item--text--title">{ truncate(movie.title, 50) }</span>
            <span>Rating: <Rating rating={ movie.rating } maxRating={5} disabled/></span>
            <span>Genre: { movie.genre }</span>
          </div>
          {from === 'result-list' && <Icon onClick={ this.handleDelete } name='window close outline' />}
        </div>
        { isOpen &&
          <div className="list__item--content-full">
            <div className='item-year'>Year: { movie.year }</div>
            <div className='item-actors'>Actors: { movie.actors }</div>
            <div className='item-link'>Watch it on Netflix</div>
          </div>
        }
      </div>
    )   
  }
}

SearchResultsListItem.propTypes = {
  from: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  deleteMovie(objectID) {
    dispatch(deleteMovie(objectID))
  },
  setMessage(message) {
    dispatch(setMessage(message))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsListItem)

// from === 'result-list' ? JSON.parse(movie.genre).join(', ') : 
// from === 'result-list' ? JSON.parse(movie.actors).join(', ') : 