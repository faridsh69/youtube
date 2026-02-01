import { CAR_API_CLIENT } from '@/apis/apiClients/apiClients'
import { PER_PAGE } from '@/utils/navigate/navigation.constants'

const CARS = 'cars'

////// CARS
export type CarsApiFilters = {
  page: number
  perPage: number
}
export const getCarsApi = (filters: CarsApiFilters) =>
  CAR_API_CLIENT.get({
    endpoint: `${CARS}`,
    data: {
      page: filters.page || 1,
      per_page: filters.perPage || PER_PAGE,
    },
  })

export const getCarApi = (reviewId: string) =>
  CAR_API_CLIENT.get({
    endpoint: `${CARS}/${reviewId}`,
  })

export type CarType = {
  id: string
  name: string
}

export const createCarApi = (data: CarType) =>
  CAR_API_CLIENT.post({
    endpoint: CARS,
    data,
  })

export const updateCarApi = (data: CarType) =>
  CAR_API_CLIENT.put({
    endpoint: `${CARS}/${data.id}`,
    data,
  })

export const deleteCarApi = (reviewId: string) =>
  CAR_API_CLIENT.remove({
    endpoint: `${CARS}/${reviewId}`,
  })
