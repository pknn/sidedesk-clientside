import {
  MoveCrossLaneActionPayload,
  MoveInLaneActionPayload,
} from 'app/store/features/Board/types'
import { DraggableLocation } from 'react-beautiful-dnd'

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
