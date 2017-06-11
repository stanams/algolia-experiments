import React from 'react'
import { shallow } from 'enzyme'
import { SearchResultsList } from '../../../Components/index.components'
import { searchMovies } from '../../../Actions/movies.actions'


describe('<SearchResultsList />', () => {
  it('renders wihtout crashing', () => {
    const results = {
      hits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
    const renderedComponent = shallow(<SearchResultsList results={ results }/>)
  })

  it('should have a valid searchMovies prop functions', () => {
    const searchMovies = jest.fn()
    const query = 'matrix'
    const results = {
      hits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
    const searchResultsList = shallow(<SearchResultsList query={ query } results={ results } searchMovies={ searchMovies }></SearchResultsList>)
    expect(searchResultsList.props().searchMovies).toBeDefined
  })

  it('should have a list of results', () => {
    const searchMovies = jest.fn()
    const query = 'ma'
    const results = {
      hits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
    const searchResultsList = shallow(<SearchResultsList query={ query } results={ results } searchMovies={ searchMovies }></SearchResultsList>)
    expect(searchResultsList.find('ul').length).toBe(1)
    expect(searchResultsList.find('ul').children().length).toBe(20)
  })
})
