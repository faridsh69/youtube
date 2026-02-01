import { CarsPage } from '@/components/Car/CarsPage/CarsPage'
import { withSeoPostfix } from '@/utils/seo/helpers/seo.helpers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: withSeoPostfix('Cars'),
  description: 'Cars page',
}

const CarsServerPage = () => {
  return <CarsPage />
}

export default CarsServerPage
