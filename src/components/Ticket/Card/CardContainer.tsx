import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

import { Children } from 'app/types/Primitive'

interface PrimitiveProps {
  children: Children
}

interface ActionProps {
  onClick: VoidFunction
}

interface DraggableProps {
  draggableProvided: DraggableProvided
  draggableStateSnapshot: DraggableStateSnapshot
}

type ComponentProps = PrimitiveProps & ActionProps & DraggableProps

const getCardClassNames = (isDragging: boolean) => {
  return [
    'my-2 w-full hover:bg-gray-100 p-4 rounded shadow cursor-pointer',
    isDragging ? 'bg-gray-200' : 'bg-white',
  ].join(' ')
}

export const CardContainer = ({
  children,
  onClick,
  draggableProvided,
  draggableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <div
    ref={draggableProvided.innerRef}
    {...draggableProvided.draggableProps}
    {...draggableProvided.dragHandleProps}
    onClick={onClick}
    className={getCardClassNames(draggableStateSnapshot.isDragging)}
  >
    {children}
  </div>
)
