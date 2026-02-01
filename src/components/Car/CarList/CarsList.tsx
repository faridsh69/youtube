import { QUERY_KEYS } from '@/apis/reactQuery/reactQuery.constants'
import { useCrudPagination } from '@/apis/reactQuery/useCrudPagination'
import { usePagination } from '@/apis/reactQuery/usePagination'
import { useCrudCarsList } from '@/apis/useCruds/adminCruds'
import { themeStyles } from '@/theme/themeStyles'
import { DataNotFound } from '@/ui'
import { PER_PAGE } from '@/utils/navigate/navigation.constants'

import { CarCard } from '../CarCard/CarCard'
import { SkeletonCarCard } from '../CarCard/SkeletonCarCard'

export const CarsList = () => {
  const { list, isLoading, listQueryKey } = useCrudCarsList()

  const { divLocatedAtBottomOfPageRef, page, showDivLocatedAtBottomOfPage } = usePagination(
    list.length,
    PER_PAGE,
  )

  useCrudPagination(QUERY_KEYS.cars.list, listQueryKey, page)

  if (!isLoading && !list.length)
    return (
      <div>
        <DataNotFound label='No cars created yet.' />
      </div>
    )

  return (
    <div className={themeStyles.paginatedList}>
      {isLoading && !list.length && <SkeletonCarCard count={3} />}
      {list.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      {showDivLocatedAtBottomOfPage && (
        <div ref={divLocatedAtBottomOfPageRef}>
          <SkeletonCarCard count={1} />
        </div>
      )}
    </div>
  )
}
