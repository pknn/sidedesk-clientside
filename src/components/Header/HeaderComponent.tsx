import React from 'react'

import { Version } from 'app/types/Metadata'

interface DataProps {
  version: Version
}

export const HeaderComponent = ({ version }: DataProps): JSX.Element => (
  <div className="flex items-center mb-2">
    <div className="flex-1">
      <span className="font-semibold italic text-lg mr-2">SideDesk</span>
      <span className="text-xs">Support Ticket System</span>
    </div>
    <span className="text-xs">v.{version}</span>
  </div>
)
