import { isObjectEmpty, isUndefined } from '../../variables/variables.helpers'
import { APP_LS_KEY } from '../constants/localstorage.constants'

export const getLs = <T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): T => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    if (isObjectEmpty(appLsData) || isUndefined(appLsData[lsKey])) {
      return defaultValue
    }

    return appLsData[lsKey]
  } catch {
    return defaultValue
  }
}

export const setLs = (lsKey: string, value: any, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || '{}'
    const appLsData = JSON.parse(appLsJson) || {}
    const newAppLsData = { ...appLsData, [lsKey]: value }

    localStorage.setItem(appLsKey, JSON.stringify(newAppLsData))
  } catch {
    const appLsJson = JSON.stringify({ [lsKey]: value })

    localStorage.setItem(lsKey, appLsJson)
  }
}

export const removeLs = (lsKey: string, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    delete appLsData[lsKey]

    localStorage.setItem(appLsKey, JSON.stringify(appLsData))
  } catch {}
}
