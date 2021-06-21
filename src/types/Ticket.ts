export enum TicketStatus {
  Pending = 0,
  Accepted = 1,
  Resolved = 2,
  Rejected = 3,
}

export interface Ticket {
  id: number
  title: string
  description: string
  reporterName: string
  reporterEmail?: string
  status: TicketStatus
  createdAt: Date
  updatedAt: Date
}

export interface TicketForm {
  id?: number
  title?: string
  description?: string
  reporterName?: string
  reporterEmail?: string
  status?: TicketStatus
  createdAt?: Date
  updatedAt?: Date
}

export interface TicketCreationForm {
  title: string
  description: string
  reporterName: string
  reporterEmail?: string
  status: TicketStatus
}

export interface TicketBody {
  id: number
  title: string
  description: string
  reporter_name: string
  reporter_email?: string
  status: TicketStatus
  created_at: Date
  updated_at: Date
}

export const toTicketForm = (ticket: Ticket): TicketForm => ticket as TicketForm

export const toTicket = (ticketForm: TicketForm): Ticket => {
  const requiredFields = [
    'id',
    'title',
    'description',
    'reporterName',
    'status',
    'createdAt',
    'updatedAt',
  ]
  if (
    Object.entries(ticketForm)
      .filter(([k]) => requiredFields.includes(k))
      .some(([_, v]) => v === undefined)
  ) {
    throw new Error('Cannot create Ticket with empty fields')
  }

  return ticketForm as Ticket
}

export const toTicketCreationForm = (
  ticketForm: TicketForm,
): TicketCreationForm => {
  const requiredFields = ['title', 'description', 'reporterName', 'status']
  if (
    Object.entries(ticketForm)
      .filter(([k]) => requiredFields.includes(k))
      .some(([_, v]) => v === undefined)
  ) {
    throw new Error('Cannot create Ticket with empty fields')
  }

  return ticketForm as TicketCreationForm
}

export const getEmptyTicketForm = (
  status: TicketStatus = TicketStatus.Pending,
): TicketForm => ({
  status,
})
