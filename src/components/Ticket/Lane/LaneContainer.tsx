import React from 'react'
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { Children } from 'app/types/Primitive'

interface PrimitiveProps {
  children: Children
}

interface ActionProps {
  onMouseOver: VoidFunction
  onMouseLeave: VoidFunction
}

interface DroppableProps {
  droppableProvided: DroppableProvided
  droppableStateSnapshot: DroppableStateSnapshot
}

type ComponentProps = PrimitiveProps & ActionProps & DroppableProps

const getLaneClassNames = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean,
) => {
  let color = 'bg-gray-50'
  if (isDraggingOver) {
    if (isDraggingFrom) {
      color = 'bg-blue-100'
    } else {
      color = 'bg-green-100'
    }
  } else if (isDraggingFrom) {
    color = 'bg-red-100'
  }
  return [
    'shadow-sm h-full relative transition-colors duration-150',
    color,
  ].join(' ')
}

export const LaneContainer = ({
  children,
  onMouseOver,
  onMouseLeave,
  droppableProvided,
  droppableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <div
    ref={droppableProvided.innerRef}
    className={getLaneClassNames(
      droppableStateSnapshot.isDraggingOver,
      !!droppableStateSnapshot.draggingFromThisWith,
    )}
    onMouseOverCapture={onMouseOver}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
)
