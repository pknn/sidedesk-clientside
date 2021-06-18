import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface DataProps {
  id: number
  title: string
  reporterName: string
}

interface DraggableProps {
  draggableProvided: DraggableProvided
  draggableStateSnapshot: DraggableStateSnapshot
}

type ComponentProps = DataProps & DraggableProps

const getCardClassNames = (isDragging: boolean) => {
  return [
    'mb-2 w-full hover:bg-gray-100 p-4 rounded shadow cursor-pointer',
    isDragging ? 'bg-gray-200' : 'bg-white',
  ].join(' ')
}

export const CardComponent = ({
  id,
  title,
  reporterName,
  draggableProvided,
  draggableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <div
    ref={draggableProvided.innerRef}
    {...draggableProvided.draggableProps}
    {...draggableProvided.dragHandleProps}
    className={getCardClassNames(draggableStateSnapshot.isDragging)}
  >
    <div className="text-xs text-gray-400 flex items-center">#{id}</div>
    <div className="flex-1 text-sm">{title}</div>
    <div className="mt-2 flex items-baseline">
      <FontAwesomeIcon className="mr-1" size="xs" icon={faUser} />
      <span className="align-baseline text-xs">{reporterName}</span>
    </div>
  </div>
)
