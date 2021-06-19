import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface DataProps {
  id: number
  title: string
  reporterName: string
}

export const CardContent = ({
  id,
  title,
  reporterName,
}: DataProps): JSX.Element => (
  <>
    <div className="text-xs text-gray-400 flex items-center">#{id}</div>
    <div className="flex-1 text-sm">{title}</div>
    <div className="mt-2 flex items-baseline">
      <Icon className="mr-1" size="xs" icon={faUser} />
      <span className="align-baseline text-xs">{reporterName}</span>
    </div>
  </>
)
