export enum TicketStatus {
  Pending = 1,
  Accepted = 2,
  Resolved = 3,
  Rejected = 4,
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
