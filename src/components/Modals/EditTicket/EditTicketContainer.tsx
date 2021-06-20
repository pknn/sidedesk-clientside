import { Children } from 'app/types/Primitive'
import React from 'react'

interface PrimitiveProps {
  children: Children
}

export const EditTicketContainer = ({ children }: PrimitiveProps) => (
  <div className="absolute inset-0 m-auto w-2/3 z-40 h-1/2 bg-white">
    {children}
  </div>
)
