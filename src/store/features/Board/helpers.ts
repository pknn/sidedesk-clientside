import { DraggableLocation } from 'react-beautiful-dnd'

import {
  MoveCrossLaneActionPayload,
  MoveInLaneActionPayload,
  TicketPosition,
} from 'app/store/features/Board/types'
import { Ticket } from 'app/types/Ticket'
import {
  getStatusFromKey,
  getStatusFromString,
  TicketStatusKeys,
} from 'app/helpers/statusMappers'

export const getMoveInLaneActionPayload = (
  source: DraggableLocation,
  destination: DraggableLocation,
): MoveInLaneActionPayload => ({
  laneId: source.droppableId,
  from: source.index,
  to: destination.index,
})

export const getMoveCrossLaneActionPayload = (
  source: DraggableLocation,
  destination: DraggableLocation,
): MoveCrossLaneActionPayload => ({
  from: {
    laneId: source.droppableId,
    index: source.index,
  },
  to: {
    laneId: destination.droppableId,
    index: destination.index,
  },
})

export const getReorderedTicketList = (
  tickets: Ticket[],
  from: number,
  to: number,
) => {
  const result = [...tickets]
  const [movingTicket] = result.splice(from, 1)
  result.splice(to, 0, movingTicket)

  return result
}

export const getMovedTicketLists = (
  source: Ticket[],
  sink: Ticket[],
  from: number,
  to: TicketPosition,
): [Ticket[], Ticket[]] => [
  source.filter((_, index) => index !== from),
  sink
    .slice(0, to.index)
    .concat({
      ...source[from],
      status: getStatusFromString(to.laneId as TicketStatusKeys),
    })
    .concat(sink.slice(to.index)),
]
