import { useCallback, useState } from 'react'

import { TypeUseToggle } from '../types/types'

export const useToggle: TypeUseToggle = (defaultValue: boolean) => {
  const [isOpen, setOpen] = useState(defaultValue)

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return { isOpen, handleToggle, handleOpen, handleClose }
}
