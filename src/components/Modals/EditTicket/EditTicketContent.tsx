import React, { useState } from 'react'

import { TicketStatus } from 'app/types/Ticket'
import { Field, Input, TextArea } from './EditTicketInputs'

export const EditTicketContent = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [reporterName, setReporterName] = useState<string>('')
  const [reporterEmail, setReporterEmail] = useState<string | undefined>('')
  const [status, setStatus] = useState<TicketStatus>(TicketStatus.Pending)

  const handleTextAreaChangeEvent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value)
    event.target.style.height = `${event.target.scrollHeight}px`
  }

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
    </div>
  )
}
