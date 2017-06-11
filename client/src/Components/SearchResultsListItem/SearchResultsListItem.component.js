import React from 'react'
import PropTypes from 'prop-types'
import { Rating, Icon } from 'semantic-ui-react'
import classNames from 'classnames'
import './SearchResultsListItem.component.css'
import { truncate } from '../../Core/utils'
import { connect } from 'react-redux'
import { Confirmation } from '../Confirmation/Confirmation.component'

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
      isOptimisticallyRemoved: false,
      confirmationMessageIsOpen: false
    }
  }

  toggleDetails = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  handleDelete = () => {
    this.props.deleteMovie(this.props.movie.objectID)
    this.setState({isOptimisticallyRemoved: true})
    this.props.setMessage('You\'re movie has been removed!')
    window.scrollTo(0, 0)
  }

  showConfirmationMessage = (e) => {
    e.stopPropagation()
    this.setState({ confirmationMessageIsOpen: true })
  }

  hideConfirmationMessage = (e) => {
    e.stopPropagation()
    this.setState({ confirmationMessageIsOpen: false })
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
            <span><strong>Rating</strong>: <Rating rating={ movie.rating } maxRating={5} disabled/></span>
            <span><strong>Genre</strong>: { from === 'result-list' ? movie.genre.replace(/"|\[|]/g,'') : movie.genre }</span>
          </div>
          {
            from === 'result-list' &&
            !this.state.confirmationMessageIsOpen &&
            <Icon onClick={ e => this.showConfirmationMessage(e) } name='window close outline' />
          }
          { this.state.confirmationMessageIsOpen && 
            <Confirmation hideConfirmationMessage={this.hideConfirmationMessage}
                          handleDelete={ this.handleDelete }/>
          }
        </div>
        { isOpen &&
          <div className="list__item--content-full">
            <div className='item-year'><strong>Year</strong>: { movie.year }</div>
            <div className='item-actors'><strong>Actors</strong>: { from === 'result-list' ? movie.actors.replace(/"|\[|]/g,'') : movie.actors }</div>
            <div className='item-alternative-titles'><strong>Alternative Titles</strong>: { from === 'result-list' ? movie.alternative_titles.replace(/"|\[|]/g,'') : movie.alternative_titles }</div>
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

export { SearchResultsListItem as PureSearchResultsListItem }
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsListItem)
