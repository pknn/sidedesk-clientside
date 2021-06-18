import React from 'react'

interface PrimitiveProps {
  children: JSX.Element | JSX.Element[]
}

type ContainerProps = PrimitiveProps

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <div className="container py-4">{children}</div>
)
