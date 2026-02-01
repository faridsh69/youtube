import { QueryClientProvider } from '@tanstack/react-query'

import '@/theme/variables.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { QUERY_CLIENT } from '@/apis/reactQuery/reactQuery.constants'
import { Portals } from '@/components/Portals/Portals'
import { OnlyChildrenProps } from '@/types/componenets.types'
import { Footer } from '@/ui/components/Footer/Footer'
import { HeaderNavbar } from '@/ui/components/HeaderNavbar/HeaderNavbar'
import { DEFAULT_META } from '@/utils/seo/seo.constants'
import { ToastContainer } from 'react-toastify'

import '@/theme/globals.scss'

export const metadata = DEFAULT_META

const RootLayout = (props: OnlyChildrenProps) => {
  const { children } = props

  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={QUERY_CLIENT}>
          <HeaderNavbar />
          <div className='layout'>{children}</div>
          <Footer />
          <Portals />
        </QueryClientProvider>
        <ToastContainer
          limit={4}
          position={'bottom-right'}
          icon={false}
          autoClose={3000}
          closeButton={false}
        />
      </body>
    </html>
  )
}

export default RootLayout
