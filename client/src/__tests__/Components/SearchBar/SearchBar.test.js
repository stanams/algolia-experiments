import React from 'react'
import { shallow } from 'enzyme';
import { SearchBar } from '../../../Components/index.components'


describe('<SearchBar />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <SearchBar/>
      );
  })
});
