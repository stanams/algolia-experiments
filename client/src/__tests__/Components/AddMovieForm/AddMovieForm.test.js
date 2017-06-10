import React from 'react'
import { shallow } from 'enzyme';
import { PureAddMovieForm as AddMovieForm } from '../../../Components/AddMovieForm/AddMovieForm.component'


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
