import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { createMock } from 'ts-auto-mock'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

import { CardComponent } from './CardComponent'
import { getMockTicket } from 'app/helpers/mockTicket'

describe('<CardComponent />', () => {
  it('should render correctly', () => {
    const mockTicket = getMockTicket()
    const shallowMountedComponent = shallow(
      <CardComponent
        id={mockTicket.id}
        title={mockTicket.title}
        reporterName={mockTicket.reporterName}
        draggableProvided={createMock<DraggableProvided>()}
        draggableStateSnapshot={createMock<DraggableStateSnapshot>()}
      />,
    )

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
