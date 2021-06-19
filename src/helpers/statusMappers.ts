import { BoardState } from 'app/types/Board'
import { TicketStatus } from 'app/types/Ticket'

export type BoardKeys = keyof BoardState
export type TicketStatusKeys = 'Pending' | 'Accepted' | 'Resolved' | 'Rejected'

const statusKeyMap: Record<TicketStatus, BoardKeys> = {
  [TicketStatus.Pending]: 'pendingTickets',
  [TicketStatus.Accepted]: 'acceptedTickets',
  [TicketStatus.Resolved]: 'resolvedTickets',
  [TicketStatus.Rejected]: 'rejectedTickets',
}

const keyStatusMap: Record<BoardKeys, TicketStatus> = (() => {
  const entries = Object.entries(statusKeyMap)
  const reversedMappedEntries = entries.map(([k, v]) => [v, k])
  return Object.fromEntries(reversedMappedEntries) as Record<
    BoardKeys,
    TicketStatus
  >
})()

const stringStatusMap: Record<TicketStatusKeys, TicketStatus> = {
  Pending: TicketStatus.Pending,
  Accepted: TicketStatus.Accepted,
  Resolved: TicketStatus.Resolved,
  Rejected: TicketStatus.Rejected,
}

export const getKeyFromStatus = (status: TicketStatus): BoardKeys =>
  statusKeyMap[status]

export const getStatusFromKey = (key: BoardKeys): TicketStatus =>
  keyStatusMap[key]

export const getStatusFromString = (key: TicketStatusKeys): TicketStatus =>
  stringStatusMap[key]

export const getKeyFromString = (key: string): BoardKeys =>
  getKeyFromStatus(stringStatusMap[key as TicketStatusKeys])
