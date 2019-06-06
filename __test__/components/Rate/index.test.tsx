import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Rate, Icon } from '../../../src/'

configure({ adapter: new Adapter() })

describe('Rate', () => {
  test('it render base correctly', () => {
    let wrapper
    let instance
    let props: any = {
      value: 1
    }
    wrapper = shallow(
      <Rate { ...props } />
    )

    props = {
      value: 1.5
    }
    wrapper = shallow(
      <Rate { ...props } />
    )

    instance = wrapper.instance()
    instance.containerView = {
      measure: (callback) => {
        callback(1, 2, 3, 4, 5, 6)
      }
    }
    instance.getValue(10)

    instance.handleChange(2)
  })
})
