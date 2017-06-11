import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from '../../../../Components/index.components'


describe('<TextInput />', () => {
  it('renders wihtout crashing', () => {
    const renderedComponent = shallow(<TextInput inputType='' errors={{}}/>)
  })

  it('renders a label with appropriate name from props', () => {
    const inputType = 'Title'
    const errors = {}
    const textInput = shallow(<TextInput inputType={ inputType } errors={ errors } ></TextInput>)
    expect(textInput.find('label').length).toBe(1)
    expect(textInput.find('label').contains(inputType)).toEqual(true)
  })

  it('renders an input', () => {
    const inputType = 'Title'
    const textInput = shallow(<TextInput inputType={ inputType }></TextInput>)
    expect(textInput.find('input').length).toBe(1)
  })

  it('should execute function onChange', () => {
    const inputType = 'Title'
    const value = 'Matrix'
    const onChange = jest.fn()
    const textInput = shallow(<TextInput inputType={ inputType } value={ value } onChange={ onChange }></TextInput>)
    expect(textInput.props().onChange).toBeDefined
    textInput.find('input').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })

  it('should update input value onChange', () => {
    const inputType = 'Title'
    const value = 'Matrix'
    const onChange = jest.fn()
    const textInput = shallow(<TextInput inputType={ inputType } value={ value } onChange={ onChange }></TextInput>)
    textInput.find('input').simulate('change', { target: { value: value }})
    expect(textInput.contains(value))
  })
})
