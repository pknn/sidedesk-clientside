import React from 'react'

import { Version } from 'app/types/Metadata'

interface DataProps {
  version: Version
}

export const HeaderComponent = ({ version }: DataProps): JSX.Element => (
  <div className="flex items-center py-2 top-0 z-50 bg-gray-200">
    <div className="flex-1">
      <span className="font-semibold italic text-lg mr-2">SideDesk</span>
      <span className="text-xs">Support Ticket System</span>
    </div>
    <span className="text-xs">v.{version}</span>
  </div>
)
