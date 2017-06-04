import React from 'react'
import { shallow } from 'enzyme';
import { AddMovieButton } from '../../../Components/index.components'


describe('<AddMovieButton />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <AddMovieButton/>
      );
  })

  it('renders text', () => {
      const text = "Add a movie";
      const renderedComponent = shallow(
        <AddMovieButton>{ text }</AddMovieButton>
      );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
});
