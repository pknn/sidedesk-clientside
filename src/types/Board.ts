import { Ticket } from 'app/types/Ticket'

export interface Board {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}
