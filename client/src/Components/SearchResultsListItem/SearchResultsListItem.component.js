import React from 'react'
import PropTypes from 'prop-types'
import { Rating } from 'semantic-ui-react'
import classNames from 'classnames'
import './SearchResultsListItem.component.css'
import { truncate } from '../../Core/utils'
export class SearchResultsListItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleDetails = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render () {
    const { movie, from } = this.props
    const { isOpen } = this.state
    const classnames = classNames('list__item', {
      'full-content': isOpen
    })

    return (
      <div className={ classnames } onClick={ this.toggleDetails }>
        <div className="list__item--content-light">
          <img className='list__item--content-light--image' src={ movie.image } alt=""/>
          <div className="item--text">
            <span className="item--text--title">{ truncate(movie.title, 50) }</span>
            <span>Rating: <Rating rating={ movie.rating } maxRating={5} disabled/></span>
            <span>Genre: { from === 'result-list' ? JSON.parse(movie.genre).join(', ') : movie.genre }</span>
          </div>
        </div>
        { isOpen &&
          <div className="list__item--content-full">
            <div className='item-year'>Year: { movie.year }</div>
            <div className='item-actors'>Actors: { from === 'result-list' ? JSON.parse(movie.actors).join(', ') : movie.actors }</div>
            <div className='item-link'>Watch it on Netflix</div>
          </div>
        }
        <div></div>
      </div>
    )   
  }
}

SearchResultsListItem.propTypes = {
  from: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired
}