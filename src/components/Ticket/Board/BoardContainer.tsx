import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Children } from 'app/types/Primitive'

interface PrimitiveProps {
  children: Children
}

interface ActionsProps {
  onDragEnd: (result: DropResult) => void
}

type ComponentProps = PrimitiveProps & ActionsProps

export const BoardContainer = ({
  children,
  onDragEnd,
}: ComponentProps): JSX.Element => (
  <div className="w-full">
    <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
  </div>
)
