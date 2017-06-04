import React from 'react'
import { shallow } from 'enzyme';
import { Header } from '../../../Components/index.components'


describe('<Header />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <Header/>
      );
  })

  it('renders text', () => {
      const text = "Search movies at the speed of light";
      const renderedComponent = shallow(
        <Header>{ text }</Header>
      );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
});
