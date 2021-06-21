import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface ActionProps {
  onClick: VoidFunction
}

type ComponentProps = ActionProps

export const AddItemButton = ({ onClick }: ComponentProps): JSX.Element => (
  <button
    className="p-2 text-sm hover:bg-gray-300 rounded cursor-pointer w-full text-left focus:outline-none outline-none"
    onClick={onClick}
  >
    <Icon icon={faPlus} size="xs" className="mr-1" />
    <span>Add item</span>
  </button>
)
