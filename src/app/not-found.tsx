'use client'

import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='layout'>
      <h1>404 - Page not found</h1>
      <span>Oops! The page you are looking for does not exist.</span>
      <p>
        Try going back to the <Link href='/'>Home</Link>.
      </p>
    </div>
  )
}

export default NotFoundPage
