'use client'

import { useState } from 'react'

import { type ErrorType } from '../../types/errors.types'

type ClientErrorExposerProps = {
  error?: ErrorType
}

export const ClientErrorExposer = (props: ClientErrorExposerProps) => {
  const { error } = props

  const [isOpen, setIsOpen] = useState(false)

  if (!error) return null

  return (
    <span className='text-white' onClick={() => setIsOpen(!isOpen)}>
      {error.status}
      {isOpen && <pre className='text-white'>{JSON.stringify(error, null, 4)}</pre>}
    </span>
  )
}
