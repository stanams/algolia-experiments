import React from 'react'
import { Pagination } from '../../../Components/Pagination/Pagination.component'
import { shallow } from 'enzyme'

describe('Pagination', () => {
  it('should render without errors', () => {
    const pagination = shallow(<Pagination/>)
  })

  it('should render the pagination list correctly', () => {
    const pagination = shallow(<Pagination from={1} to={10} active={5} />)
    const listItems = pagination.find('.pagination__list-item')
    const activeItem = listItems.at(4)
    expect(listItems.length).toBe(10)
    expect(activeItem.find('li').length).toBe(1)
    expect(activeItem.hasClass('pagination__list-item--active')).toBe(true)
  })

  it('should call "onClick" method with the clicked item', () => {
    const onClick = jest.fn()
    const pagination = shallow(<Pagination onClick={onClick} from={1} to={10} active={5} />)
    const itemToBeClicked = pagination.find('.pagination__list-item').at(3) // item 4
    itemToBeClicked.find('li').simulate('click')
    expect(onClick).toHaveBeenCalledWith(4)
  })
})