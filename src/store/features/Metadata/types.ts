import { Ticket } from 'app/types/Ticket'

export type Version = string

export interface MetadataState {
  version: Version
  shouldShowEditTicketModal: boolean
  editingTicket?: Ticket
}

export interface ToggleEditTicketModalPayload {
  withTicket?: Ticket
}
