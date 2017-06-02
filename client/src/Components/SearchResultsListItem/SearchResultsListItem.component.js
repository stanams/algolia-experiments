import React from 'react'
import { Rating } from 'semantic-ui-react'
import classNames from 'classnames'
import './SearchResultsListItem.component.css'

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
    const { movie } = this.props
    const { isOpen } = this.state
    const classnames = classNames('list__item', {
      'full-content': isOpen
    })
    return (
      <div className={ classnames } onClick={ this.toggleDetails }>
        <div className="list__item--content-light">
          <img className='list__item--content-light--image' src={movie.image} alt=""/>
          <div className="item--text">
            <span className="item--text--title">{movie.title}</span>
            <span>Rating: <Rating icon='star' defaultRating={movie.rating} maxRating={5} /></span>
            <span>Genre: {JSON.parse(movie.genre).join(', ')}</span>
          </div>
        </div>
        { isOpen &&
          <div className="list__item--content-full">
            <div className='item-year'>Year: {movie.year}</div>
            <div className='item-actors'>Actors: {JSON.parse(movie.actors).join(', ')}</div>
            <div className='item-link'>Watch it on Netflix</div>
          </div>
        }
      </div>
    )   
  }
}