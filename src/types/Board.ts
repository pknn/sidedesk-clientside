import { Ticket, TicketStatus } from 'app/types/Ticket'

export interface BoardState {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

interface TicketPosition {
  index: number
  statusLane: TicketStatus
}

export interface MoveActionPayload {
  from: TicketPosition
  to: TicketPosition
}
