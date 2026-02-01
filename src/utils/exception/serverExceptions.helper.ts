'use server'

import { ErrorType } from '@/types/errors.types'
import type { AxiosError } from 'axios'

export const handleServerExceptions = async (error: unknown): Promise<ErrorType> => {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError

    const clearError = {
      url: axiosError.config?.url,
      status: axiosError.status,
      message: axiosError.message,
      payload: axiosError.config?.data,
      response: (axiosError.response?.data as { detail: string })?.detail,
      authorization: axiosError.config?.headers?.Authorization,
    } as ErrorType

    console.error('************ SERVER ERROR API ************', clearError)

    return clearError
  }

  if (error instanceof Error) {
    const clearError = {
      url: '',
      status: 200,
      message: error.message,
      stack: error.stack,
    } as ErrorType

    console.error('************ SERVER ERROR JS ************', clearError)

    return clearError
  }

  console.error('************ SERVER ERROR Others ************', error)

  return error as ErrorType
}
