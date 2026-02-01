import { TypeUser } from '@/types/core.types'

import { LS_KEYS } from './constants/localstorage.constants'
import { getLs, removeLs, setLs } from './helpers/localstorage.helpers'

export const getLsAuthUser = (): TypeUser | null => {
  return getLs(LS_KEYS.auth.authUser, null)
}

export const setLsAuthUser = (authUser: TypeUser) => {
  setLs(LS_KEYS.auth.authUser, authUser)
}

export const removeLsAuthUser = () => {
  removeLs(LS_KEYS.auth.authUser)
}

export const getLsBearerToken = (): string => {
  return getLs(LS_KEYS.auth.bearerToken, '')
}

export const setLsBearerToken = (bearerToken: string) => {
  setLs(LS_KEYS.auth.bearerToken, bearerToken)
}

export const removeLsBearerToken = () => {
  removeLs(LS_KEYS.auth.bearerToken)
}
export const getLsRefreshToken = (): string => {
  return getLs(LS_KEYS.auth.refreshToken, '')
}

export const setLsRefreshToken = (refreshToken: string) => {
  setLs(LS_KEYS.auth.refreshToken, refreshToken)
}

export const removeLsRefreshToken = () => {
  removeLs(LS_KEYS.auth.refreshToken)
}
