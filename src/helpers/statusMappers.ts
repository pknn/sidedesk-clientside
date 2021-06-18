import { BoardState } from 'app/types/Board'
import { TicketStatus } from 'app/types/Ticket'

export type BoardTypeKeys = keyof BoardState
export type TicketStatusKeys = 'Pending' | 'Accepted' | 'Resolved' | 'Rejected'

const statusKeyMap: Record<TicketStatus, BoardTypeKeys> = {
  [TicketStatus.Pending]: 'pendingTickets',
  [TicketStatus.Accepted]: 'acceptedTickets',
  [TicketStatus.Resolved]: 'resolvedTickets',
  [TicketStatus.Rejected]: 'rejectedTickets',
}

const keyStatusMap: Record<BoardTypeKeys, TicketStatus> = (() => {
  const entries = Object.entries(statusKeyMap)
  const reversedMappedEntries = entries.map(([k, v]) => [v, k])
  return Object.fromEntries(reversedMappedEntries) as Record<
    BoardTypeKeys,
    TicketStatus
  >
})()

const stringStatusMap: Record<TicketStatusKeys, TicketStatus> = {
  Pending: TicketStatus.Pending,
  Accepted: TicketStatus.Accepted,
  Resolved: TicketStatus.Resolved,
  Rejected: TicketStatus.Rejected,
}

export const getKeyFromStatus = (status: TicketStatus): BoardTypeKeys =>
  statusKeyMap[status]

export const getStatusFromKey = (key: BoardTypeKeys): TicketStatus =>
  keyStatusMap[key]

export const getStatusFromString = (key: TicketStatusKeys): TicketStatus =>
  stringStatusMap[key]
