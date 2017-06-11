import React from 'react'
import { shallow } from 'enzyme';
import { SelectInput } from '../../../../Components/index.components'


describe('<SelectInput />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(<SelectInput label=''/>)
  })

  it('renders a label', () => {
    const label = 'Genre'
    const selectInput = shallow(<SelectInput label={ label }></SelectInput>)
    expect(selectInput.find('label').length).toBe(1)
  })

  it('should have label prop passed', () => {
    const label = 'Genre'
    const selectInput = shallow(<SelectInput label={ label }></SelectInput>)
    expect(selectInput.contains(label)).toEqual(true)
  })
})
