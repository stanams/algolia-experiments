import React from 'react'
import { shallow } from 'enzyme';
import { SelectInput } from '../../../../Components/index.components'


describe('<SelectInput />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(
        <SelectInput label=''/>
      );
  })
});
