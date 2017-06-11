import React from 'react'
import { shallow } from 'enzyme'
import { SearchBar } from '../../../Components/index.components'


describe('<SearchBar />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(<SearchBar/>)
  })

   it('renders an input', () => {
    const searchBar = shallow(<SearchBar/>)
    expect(searchBar.find('input').length).toBe(1)
  })

  it('should execute function handleInput', () => {
    const handleInput = jest.fn()
    const query = 'matrix'
    const searchBar = shallow(<SearchBar query={ query } handleInput={ handleInput }></SearchBar>)
    expect(searchBar.props().handleInput).toBeDefined
    searchBar.find('input').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })

  it('should update input value on handleInput', () => {
    const query = 'matrix'
    const handleInput = jest.fn()
    const searchBar = shallow(<SearchBar query={ query } handleInput={ handleInput }></SearchBar>)
    searchBar.find('input').simulate('change', { target: { query: query }})
    expect(searchBar.contains(query))
  })
})
