import React from 'react'
import { shallow } from 'enzyme';
import { AddMovieForm } from '../../../Components/index.components'


describe('<AddMovieForm />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <AddMovieForm/>
      );
  })

  it('renders text', () => {
      const text = "Add a new movie";
      const renderedComponent = shallow(
        <AddMovieForm>{ text }</AddMovieForm>
      );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
});
