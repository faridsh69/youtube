import { AxiosResponse } from 'axios'

import { CORE_API_CLIENT } from '../apiClients/apiClients'

export const getUserEmailAvailabilityApi = (data: { email: string }) =>
  CORE_API_CLIENT.get({
    endpoint: 'user-email/availability',
    data,
  })

export const postLoginApi = (data: { username: string; password: string }) =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/jwt/login',
    data,
  })

export const getUserProfile = () =>
  CORE_API_CLIENT.get({
    endpoint: 'users/me',
  })

export const postUserLogout = () =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/jwt/logout',
  })

export const postRefreshToken = (data: { username: string; password: string }) =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/refresh/new',
    data,
  })

export const postUseRefreshToken = (data: {
  token: string
  email: string
}): Promise<AxiosResponse<{ access_token: string; refresh_token: string }>> =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/refresh/use',
    data,
  })
