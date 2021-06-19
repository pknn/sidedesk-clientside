import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface DataProps {
  shouldShowAddButton: boolean
}

interface ActionProps {
  onClick: VoidFunction
}

type ComponentProps = DataProps & ActionProps

const getClassName = (shouldShowAddButton: boolean) =>
  [
    'p-2 text-sm hover:bg-gray-300 rounded cursor-pointer w-full text-left',
    shouldShowAddButton ? 'text-gray-700' : 'text-gray-100',
  ].join(' ')

export const AddItemButton = ({
  shouldShowAddButton,
  onClick,
}: ComponentProps): JSX.Element => (
  <button className={getClassName(shouldShowAddButton)} onClick={onClick}>
    {shouldShowAddButton && <Icon icon={faPlus} size="xs" className="mr-1" />}
    <span>Add item</span>
  </button>
)
