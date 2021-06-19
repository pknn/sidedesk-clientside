import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface DataProps {
  shouldShowAddButton: boolean
}

const getTextClassNames = (shouldShow: boolean) =>
  ['text-sm ml-2', shouldShow ? 'text-gray-700' : 'text-gray-100'].join(' ')

export const Add = ({ shouldShowAddButton }: DataProps) => (
  <div className="m-2 p-2 flex items-center hover:bg-gray-300 rounded cursor-pointer">
    {shouldShowAddButton && <Icon icon={faPlus} size="xs"></Icon>}
    <span className={getTextClassNames(shouldShowAddButton)}>Add item</span>
  </div>
)
