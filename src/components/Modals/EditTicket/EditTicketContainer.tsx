import { Children } from 'app/types/Primitive'
import React from 'react'

interface PrimitiveProps {
  children: Children
}

export const EditTicketContainer = ({ children }: PrimitiveProps) => (
  <div className="absolute inset-0 m-auto w-3/4 lg:w-1/2 z-40 h-2/5 md:h-2/5 bg-white rounded">
    {children}
  </div>
)
