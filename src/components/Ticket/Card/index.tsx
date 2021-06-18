import { Ticket, TicketStatus } from 'app/types/Ticket'
import React from 'react'

import { CardComponent } from './CardComponent'

export const Card = (): JSX.Element => {
  const ticketInfo: Ticket = {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    reporterName: 'John Bro',
    reporterEmail: 'john.bro@gmail.com',
    status: TicketStatus.Pending,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const ticketInfo2: Ticket = {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    reporterName: 'John Bro',
    reporterEmail: 'john.bro@gmail.com',
    status: TicketStatus.Pending,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <>
      <CardComponent {...ticketInfo} />
      <CardComponent {...ticketInfo2} />
    </>
  )
}
