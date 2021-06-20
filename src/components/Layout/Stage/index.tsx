import { Children } from 'app/types/Primitive'
import React from 'react'

interface PrimitiveProps {
  children: Children
}

interface DataProps {
  shouldShowStage: boolean
}

interface ActionProps {
  onDismiss: VoidFunction
}

type ComponentProps = PrimitiveProps & DataProps & ActionProps

const getStageClassNames = (shouldShowStage: boolean) =>
  [
    'z-10 absolute bg-gray-700 bg-opacity-80 inset-0 m-auto',
    shouldShowStage ? 'block' : 'hidden',
  ].join(' ')

export const Stage = ({
  children,
  shouldShowStage,
  onDismiss,
}: ComponentProps): JSX.Element => (
  <div className={shouldShowStage ? 'block' : 'hidden'}>
    <div
      className={getStageClassNames(shouldShowStage)}
      onClickCapture={onDismiss}
    />
    <div className="z-30">{children}</div>
  </div>
)
