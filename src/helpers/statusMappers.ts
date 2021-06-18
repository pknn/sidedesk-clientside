import { BoardState } from 'app/types/Board'
import { TicketStatus } from 'app/types/Ticket'

export type BoardTypeKeys = keyof BoardState

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

export const getKeyFromStatus = (status: TicketStatus): BoardTypeKeys =>
  statusKeyMap[status]

export const getStatusFromKey = (key: BoardTypeKeys): TicketStatus =>
  keyStatusMap[key]
