import { Children } from 'app/types/Primitive'
import React from 'react'

interface PrimitiveProps {
  children: Children
}

interface ActionProps {
  onClick: VoidFunction
}

type ComponentProps = PrimitiveProps & ActionProps

export const Stage = ({ children, onClick }: ComponentProps) => (
  <div
    className="z-40 absolute bg-gray-700 bg-opacity-80 inset-0 m-auto"
    onClick={onClick}
  >
    {children}
  </div>
)
