import { Ticket, TicketForm, TicketStatus } from 'app/types/Ticket'

export type Version = string

export interface MetadataState {
  version: Version
  shouldShowEditTicketModal: boolean
  isEditing: boolean
  ticketForm: TicketForm
}

export interface ToggleEditTicketModalPayload {
  withTicket?: Ticket
  withStatus?: TicketStatus
}
