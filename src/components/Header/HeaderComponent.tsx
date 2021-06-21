import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Version } from 'app/store/features/Metadata/types'
import { SortedBy, sortedByOptions } from 'app/store/features/Board/types'

interface DataProps {
  version: Version
  sortedBy: SortedBy
}

interface ActionProps {
  onAddButtonClick: VoidFunction
  onSelectSortOption: (sortOption: SortedBy) => void
}

type ComponentProps = DataProps & ActionProps

export const HeaderComponent = ({
  version,
  onSelectSortOption,
  onAddButtonClick,
}: ComponentProps): JSX.Element => (
  <div className="flex items-center py-2 top-0 z-50 bg-gray-200">
    <div className="flex-1">
      <span className="font-semibold italic text-lg mr-2">SideDesk</span>
      <span className="text-xs">Support Ticket System</span>
      <span className="text-xs ml-1">v.{version}</span>
    </div>
    <span className="text-sm">Sorted by: </span>
    <select
      className="mx-2 text-sm"
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        onSelectSortOption(event.target.value as SortedBy)
      }
    >
      {sortedByOptions.map((sortOption) => (
        <option key={sortOption} value={sortOption}>
          {sortOption}
        </option>
      ))}
    </select>
    <button
      className="p-2 text-sm hover:bg-gray-300 rounded cursor-pointer text-left focus:outline-none outline-none"
      onClick={onAddButtonClick}
    >
      <Icon icon={faPlus} size="xs" className="mr-1" />
      Add item
    </button>
  </div>
)
