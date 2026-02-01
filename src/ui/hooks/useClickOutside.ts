import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (
  handleClose: () => void,
  shouldListen: boolean,
  actionName = 'mouseup',
) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: any) => {
      const target = event.target

      if (!ref.current || ref.current.contains(target)) return

      if (target?.closest('[data-floating-ui-portal]')) return

      handleClose()
    },
    [handleClose],
  )

  useEffect(() => {
    if (!shouldListen) return

    document.addEventListener(actionName, handleClickOutside)

    return () => document.removeEventListener(actionName, handleClickOutside)
  }, [handleClickOutside, ref, shouldListen, actionName])

  return ref
}
