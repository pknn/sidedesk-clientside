import React from 'react'

export const EditTicketContent = () => {
  return (
    <div className="p-6">
      <input
        type="text"
        className="p-2 text-xl font-semibold outline-none rounded hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500"
        placeholder="Title"
      />
    </div>
  )
}
