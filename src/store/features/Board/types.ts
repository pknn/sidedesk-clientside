import { Ticket, Tickets, TicketStatus } from 'app/types/Ticket'

export type SortedBy = 'id' | 'createdAt' | 'updatedAt'
export const sortedByOptions: SortedBy[] = ['id', 'createdAt', 'updatedAt']

export interface BoardState {
  tickets: Tickets
  sortedBy: SortedBy
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
