import { TicketStatus } from 'app/types/Ticket'

export interface TicketCreationForm {
  title?: string
  description?: string
  reporterName?: string
  reporterEmail?: string
  status: TicketStatus
}

export interface TicketFormState {
  ticketForm?: TicketCreationForm
}
