import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { CardContainer } from './CardContainer'
import { CardContent } from './CardContent'

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

export const CardComponent = ({
  id,
  title,
  reporterName,
  draggableProvided,
  draggableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <CardContainer
    draggableProvided={draggableProvided}
    draggableStateSnapshot={draggableStateSnapshot}
  >
    <CardContent id={id} title={title} reporterName={reporterName} />
  </CardContainer>
)
