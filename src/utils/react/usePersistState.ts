import { useEffect, useState } from 'react'

import { APP_LS_KEY } from '../localstorage/constants/localstorage.constants'
import { getLs, setLs } from '../localstorage/helpers/localstorage.helpers'

export const usePersistState = <T>(
  lsKey: string,
  defaultValue: T,
  appLsKey = APP_LS_KEY,
): [T, (value: T) => void] => {
  const initialState = getLs(lsKey, defaultValue, appLsKey)
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    setLs(lsKey, value, appLsKey)
  }, [appLsKey, lsKey, value])

  return [value, setValue]
}
