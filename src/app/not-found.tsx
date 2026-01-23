'use client'

import { APP_URLS } from '@/constants/url.constants'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <span>Oops! The page you are looking for does not exist.</span>
      <p>
        Try going back to the <Link href={APP_URLS.home}>Home</Link>.
      </p>
    </div>
  )
}

export default NotFoundPage
