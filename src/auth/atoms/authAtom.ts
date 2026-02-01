import {
  getLsAuthUser,
  getLsBearerToken,
  getLsRefreshToken,
} from '@/utils/localstorage/localstorage'
import { atom } from 'jotai'

export const EMPTY_AUTH_ATOM = {
  bearerToken: '',
  refreshToken: '',
  user: null,
  isLoggedIn: false,
}

export const DEFAULT_AUTH_ATOM = {
  bearerToken: getLsBearerToken(),
  refreshToken: getLsRefreshToken(),
  user: getLsAuthUser(),
  isLoggedIn: !!getLsRefreshToken(),
}

export const authAtom = atom(DEFAULT_AUTH_ATOM)
