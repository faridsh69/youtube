'use client'

import {
  createCarApi,
  deleteCarApi,
  getCarApi,
  getCarsApi,
  updateCarApi,
} from '@/apis/apis/carApis'
import { QueryKeyApisType } from '@/types/reactQuery.types'
import { handleClientExceptions } from '@/utils/exception/clientExceptions.helper'
import { QueryClient } from '@tanstack/react-query'

import { postAdminAuthUserEmailpassApi } from '../apis/adminApis'
import {
  getUserEmailAvailabilityApi,
  getUserProfile,
  postLoginApi,
  postRefreshToken,
  postUserLogout,
} from '../apis/authApis'

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 900000,
    },
    mutations: {
      onError: error => handleClientExceptions(error, 'mutation'),
    },
  },
})

export const QUERY_KEYS = {
  admin: {
    authUserEmailpass: 'admin authUserEmailpass',
  },

  auth: {
    userEmailAvailability: 'User email availability',
    login: 'auth Login',
    logout: 'auth Logout',
    profile: 'User Profile',
    refreshToken: 'auth Refresh token',
  },
  products: {
    search: 'search products',
  },
  quiz: {
    quizSubmission: 'Quiz submission',
  },
  cars: {
    list: 'cars list',
  },
}

export const QUERY_KEY_APIS: QueryKeyApisType = {
  // AUTH
  [QUERY_KEYS.admin.authUserEmailpass]: {
    createApi: postAdminAuthUserEmailpassApi,
  },
  [QUERY_KEYS.auth.userEmailAvailability]: {
    createApi: getUserEmailAvailabilityApi,
  },
  [QUERY_KEYS.auth.login]: {
    createApi: postLoginApi,
  },
  [QUERY_KEYS.auth.profile]: {
    createApi: getUserProfile,
  },
  [QUERY_KEYS.auth.logout]: {
    createApi: postUserLogout,
  },
  [QUERY_KEYS.auth.refreshToken]: {
    createApi: postRefreshToken,
  },

  // Cars
  [QUERY_KEYS.cars.list]: {
    listApi: getCarsApi,
    singleApi: getCarApi,
    createApi: createCarApi,
    updateApi: updateCarApi,
    deleteApi: deleteCarApi,
  },
}
