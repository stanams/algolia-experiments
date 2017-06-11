import React from 'react'
import { shallow } from 'enzyme'
import { AddMovieButton } from '../../../Components/index.components'


describe('<AddMovieButton />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(<AddMovieButton/>)
  })

  it('renders text', () => {
    const text = "Add a movie"
    const renderedComponent = shallow(<AddMovieButton>{ text }</AddMovieButton>)
    expect(renderedComponent.contains(text)).toEqual(true)
  })

  it('should have openForm prop passed', () => {
    const openForm = jest.fn()
    const addMovieButton = shallow(<AddMovieButton openForm={ openForm }></AddMovieButton>)
    expect(addMovieButton.props().openForm).toBeDefined
  })

  it('should call openForm on click', () => {
    const openForm = jest.fn()
    const addMovieButton = shallow(<AddMovieButton openForm={ openForm }></AddMovieButton>)
    addMovieButton.simulate('click')
    expect(openForm).toHaveBeenCalled
  })
})
