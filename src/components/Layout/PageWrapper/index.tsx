import React from 'react'

interface PrimitiveProps {
  children: JSX.Element
}

export const PageWrapper = ({ children }: PrimitiveProps): JSX.Element => (
  <div className="bg-gray-200 relative h-full">{children}</div>
)
