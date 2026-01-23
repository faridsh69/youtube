import { APP_URLS } from '@/constants/url.constants'
import Link from 'next/link'

export const CarsPage = () => {
  return (
    <div>
      <Link href={APP_URLS.car.replace(':id', '1')}>Car number 1</Link>{' '}
    </div>
  )
}
