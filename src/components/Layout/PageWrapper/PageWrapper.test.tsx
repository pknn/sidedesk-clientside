import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { PageWrapper } from '.'

describe('<PageWrapper />', () => {
  const mockChild: JSX.Element = <div id="mock-child">Hello</div>
  it('should render child component', () => {
    const shallowMountedComponent = shallow(
      <PageWrapper>{mockChild}</PageWrapper>,
    )

    expect(shallowMountedComponent.find('#mock-child').exists()).toBe(true)
  })
  it('should render correctly', () => {
    const shallowMountedComponent = shallow(
      <PageWrapper>{mockChild}</PageWrapper>,
    )

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
