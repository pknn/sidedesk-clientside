import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Container } from '.'

describe('<Container />', () => {
  const mockChild: JSX.Element = <div id="mock-child">Hello</div>
  it('should render child component', () => {
    const shallowMountedComponent = shallow(<Container>{mockChild}</Container>)

    expect(shallowMountedComponent.find('#mock-child').exists()).toBe(true)
  })
  it('should render correctly', () => {
    const shallowMountedComponent = shallow(<Container>{mockChild}</Container>)

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
