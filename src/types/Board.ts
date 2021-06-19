import { Ticket } from 'app/types/Ticket'

export interface BoardState {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

interface TicketPosition {
  index: number
  laneId: string
}

export interface MoveCrossLaneActionPayload {
  from: TicketPosition
  to: TicketPosition
}

export interface MoveInLaneActionPayload {
  from: number
  to: number
  laneId: string
}
