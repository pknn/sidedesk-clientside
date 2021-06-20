import { Children } from 'app/types/Primitive'
import React from 'react'

interface PrimitiveProps {
  children: Children
}

interface InputProps {
  value: string | number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: string
  classNames?: string
}

interface TextAreaProps {
  value: string | number | undefined
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  classNames?: string
}

export const Field = ({ children }: PrimitiveProps) => (
  <div className="my-1">{children}</div>
)

export const Input = ({
  value,
  onChange,
  placeholder,
  type,
  classNames,
}: InputProps) => (
  <input
    value={value}
    onChange={onChange}
    type={type}
    className={[
      'p-2 outline-none rounded hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 mb-2 mr-2 w-full',
      classNames,
    ].join(' ')}
    placeholder={placeholder}
  />
)

export const TextArea = ({
  value,
  onChange,
  placeholder,
  classNames,
}: TextAreaProps) => (
  <textarea
    value={value}
    onChange={onChange}
    className={[
      'p-2 text-xs outline-none w-full rounded appearance-none hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 resize-none',
      classNames,
    ].join(' ')}
    placeholder={placeholder}
  />
)
