import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Add = () => (
  <div className="m-2 p-2 flex items-center hover:bg-gray-300 rounded cursor-pointer">
    <Icon icon={faPlus} size="xs"></Icon>
    <span className="text-sm ml-2">Add item</span>
  </div>
)
