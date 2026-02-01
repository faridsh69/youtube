'use client'

import { useRouter } from 'next/navigation'

export const useChangePath = () => {
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  return { navigate }
}
