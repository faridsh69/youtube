import { usePathname } from 'next/navigation'

export const useCheckPath = (path: string) => {
  const pathname = usePathname()

  return pathname.startsWith(path)
}
