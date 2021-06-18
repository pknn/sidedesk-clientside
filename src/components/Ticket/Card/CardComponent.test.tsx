import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Card } from '.'
import { getMockTicket } from 'app/helpers/mockTicket'

describe('<CardComponent />', () => {
  it.only('should render correctly', () => {
    const mockTicket = getMockTicket()
    const shallowMountedComponent = shallow(
      <Card
        index={0}
        id={mockTicket.id}
        title={mockTicket.title}
        reporterName={mockTicket.reporterName}
      />,
    )

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
