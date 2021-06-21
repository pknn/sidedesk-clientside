import React, { useLayoutEffect, useState } from 'react'

import { TicketForm, TicketStatus } from 'app/types/Ticket'
import { Field, Input, TextArea } from './EditTicketInputs'
import { ticketStatusOptions } from 'app/helpers/mockTicket'
import {
  getStatusFromString,
  TicketStatusKeys,
} from 'app/helpers/statusMappers'
import { getOr, getOrElse } from 'app/helpers/value'

interface DataProps {
  editingTicket?: TicketForm
}

interface ActionProps {
  onSave: VoidFunction
}

type ComponentProps = DataProps & ActionProps

const getStringOrEmpty = getOr('')

export const EditTicketContent = ({
  editingTicket,
  onSave,
}: ComponentProps) => {
  const [title, setTitle] = useState<string>(
    getStringOrEmpty(editingTicket?.title),
  )
  const [description, setDescription] = useState<string>(
    getStringOrEmpty(editingTicket?.description),
  )
  const [reporterName, setReporterName] = useState<string>(
    getStringOrEmpty(editingTicket?.reporterName),
  )
  const [reporterEmail, setReporterEmail] = useState<string | undefined>(
    editingTicket?.reporterEmail,
  )
  const [status, setStatus] = useState<TicketStatus>(
    getOrElse(editingTicket?.status, TicketStatus.Pending),
  )

  const handleTextAreaChangeEvent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value)
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  useLayoutEffect(() => {
    const textArea = document.querySelector('textarea')
    if (!textArea) return
    textArea.style.height = `${textArea.scrollHeight}px`
  })

  return (
    <div className="p-6">
      <Field>
        <Input
          classNames="text-xl font-semibold"
          value={title}
          placeholder="Title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Field>
      <Field>
        <select
          value={status}
          className="p-1 hover:bg-gray-200 rounded text-sm"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setStatus(
              getStatusFromString(event.target.value as TicketStatusKeys),
            )
          }
        >
          {ticketStatusOptions.map((status) => (
            <option
              className="rounded text-sm bg-gray-300"
              key={status}
              value={status}
            >
              {TicketStatus[status]}
            </option>
          ))}
        </select>
      </Field>
      <Field>
        <p className="m-2 text-xs font-semibold">Description</p>
        <TextArea
          value={description}
          onChange={handleTextAreaChangeEvent}
          placeholder="Add a description..."
        />
      </Field>
      <Field>
        <p className="m-2 text-xs font-semibold">Reporter</p>
        <div className="md:flex">
          <Input
            classNames="text-xs"
            type="text"
            value={reporterName}
            placeholder="Name"
            onChange={(event) => setReporterName(event.target.value)}
          />
          <Input
            classNames="text-xs"
            type="text"
            value={reporterEmail}
            placeholder="Email (optional)"
            onChange={(event) => setReporterEmail(event.target.value)}
          />
        </div>
      </Field>
      <button
        className="p-2 bg-blue-400 hover:bg-blue-700 hover:text-white rounded text-sm focus:outline-none"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  )
}
