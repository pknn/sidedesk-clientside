import React from 'react'
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'

import { CardComponent } from './CardComponent'

interface DataProps {
  id: number
  title: string
  reporterName: string
  index: number
}

export const Card = ({
  id,
  title,
  reporterName,
  index,
}: DataProps): JSX.Element => (
  <Draggable draggableId={id.toString()} key={id} index={index}>
    {(
      draggableProvided: DraggableProvided,
      draggableStateSnapshot: DraggableStateSnapshot,
    ) => (
      <CardComponent
        id={id}
        title={title}
        reporterName={reporterName}
        draggableProvided={draggableProvided}
        draggableStateSnapshot={draggableStateSnapshot}
      />
    )}
  </Draggable>
)
