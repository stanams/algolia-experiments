import React from 'react'
import { shallow } from 'enzyme';
import { TextInput } from '../../../../Components/index.components'


describe('<TextInput />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <TextInput/>
      );
  })
});
