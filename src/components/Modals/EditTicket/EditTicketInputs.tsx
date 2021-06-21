import { Children } from 'app/types/Primitive'
import React, { useState } from 'react'

interface PrimitiveProps {
  children: Children
}

interface InputProps {
  value: string | number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: string
  className?: string
  required?: boolean
}

interface TextAreaProps {
  value: string | number | undefined
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  classNames?: string
  required?: boolean
}

export const Field = ({ children }: PrimitiveProps) => (
  <div className="my-1">{children}</div>
)

export const Input = ({
  value,
  onChange,
  placeholder,
  type,
  className,
  required,
}: InputProps) => {
  const [isValid, setIsValid] = useState(true)
  const handleBlur = () => {
    setIsValid(!required || (!!value && value.toString().length > 0))
  }

  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={[
        'p-2 outline-none rounded hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 mb-2 mr-2 w-full',
        !isValid && 'ring-2 ring-red-400',
        className,
      ].join(' ')}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  )
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  classNames,
  required,
}: TextAreaProps) => {
  const [isValid, setIsValid] = useState(true)
  const handleBlur = () => {
    setIsValid(!required || (!!value && value.toString().length > 0))
  }
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={[
        'p-2 text-xs outline-none w-full rounded appearance-none hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 resize-none',
        !isValid && 'ring-2 ring-red-400',
        classNames,
      ].join(' ')}
      placeholder={placeholder}
      onBlur={handleBlur}
    />
  )
}
