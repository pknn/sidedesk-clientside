import React from 'react'

import { TicketStatus } from 'app/types/Ticket'

interface DataProps {
  id: number
  title: string
  description: string
  status: TicketStatus
}

export const CardComponent = ({
  id,
  title,
  description,
  status,
}: DataProps): JSX.Element => (
  <div>
    <span>{id}</span>
    <span>{title}</span>
    <span>{description}</span>
    <span>{TicketStatus[status]}</span>
  </div>
)
