import React from 'react'

import { Children } from 'app/types/Primitive'

interface PrimitiveProps {
  children: Children
}

export const PageWrapper = ({ children }: PrimitiveProps): JSX.Element => (
  <div className="bg-gray-200 relative h-full min-h-screen">{children}</div>
)
