import { Ticket, TicketStatus } from 'app/types/Ticket'

export interface BoardState {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

export interface TicketPosition {
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

export interface EditTicketActionPayload {
  isStatusChanged: boolean
  statusChangedFrom?: TicketStatus
  updatedTicket: Ticket
}
