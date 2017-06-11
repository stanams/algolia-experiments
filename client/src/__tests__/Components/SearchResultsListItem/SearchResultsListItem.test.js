import React from 'react'
import { shallow } from 'enzyme'
import { PureSearchResultsListItem as SearchResultsListItem } from '../../../Components/SearchResultsListItem/SearchResultsListItem.component'

describe('<SearchResultsListItem />', () => {
  it('renders wihtout crashing', () => {
    const movie = {
      title: 'yo',
      genre: 'drama',
      year: 2010,
      actors: 'john doe',
      alternative_titles: 'yo, yu',
      rating: 4,
      image: 'http://media.comicbook.com/files/img/default-movie.png'
    }
    const renderedComponent = shallow(<SearchResultsListItem movie={ movie } from={'result-list'}/>)
  })

  it('should toggle details when item is clicked', () => {
    const movie = {
      title: 'ya',
      genre: 'history',
      year: 2011,
      actors: 'John doe',
      alternative_titles: 'ya, yeh',
      rating: 3,
      image: 'https://media.comicbook.com/files/img/default-movie.png'
    }
    const searchResultsListItem = shallow(<SearchResultsListItem movie={ movie } from={'result-list'}/>)
    const itemToBeClicked = searchResultsListItem.find('div').at(1)
    itemToBeClicked.simulate('click')
    expect(searchResultsListItem.find('.list__item--content-full')).toBeDefined()
  })
})
