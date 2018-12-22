import React from 'react'
import { shallow } from 'enzyme'
import { AddTodoForm } from '../AddTodoForm'

it('should render AddTodoForm correctly', () => {
    const wrapper = shallow(<AddTodoForm />)
    expect(wrapper).toMatchSnapshot()
})

// it('should handle onSubmit', () => {
//     const startAddTodo = jest.fn()
//     const wrapper = shallow(<AddTodoForm startAddTodo={startAddTodo} />)
//     wrapper.find('form').prop('onSubmit')()
// })