import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface DataProps {
  id: number
  title: string
  reporterName: string
}

export const CardComponent = ({
  id,
  title,
  reporterName,
}: DataProps): JSX.Element => (
  <div className="my-2 w-full bg-white hover:bg-gray-100 p-4 rounded shadow cursor-pointer">
    <div className="text-xs text-gray-400 flex items-center">#{id}</div>
    <div className="flex-1 text-sm">{title}</div>
    <div className="mt-2 flex items-baseline">
      <FontAwesomeIcon className="mr-1" size="xs" icon={faUser} />
      <span className="align-baseline text-xs">{reporterName}</span>
    </div>
  </div>
)
