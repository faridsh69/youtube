import { useCrudAuthLogout } from '@/apis/useCruds/authCruds'
import {
  removeLsAuthUser,
  removeLsBearerToken,
  removeLsRefreshToken,
} from '@/utils/localstorage/localstorage'
import { PAGE_PATHS } from '@/utils/navigate/navigation.constants'
import { useChangePath } from '@/utils/navigate/useChangePath'
import { useAtom } from 'jotai'

import { authAtom, EMPTY_AUTH_ATOM } from '../atoms/authAtom'

export const useAuthLogout = () => {
  const { createMutation: logoutMutation } = useCrudAuthLogout()
  const [, setAuth] = useAtom(authAtom)

  const { navigate } = useChangePath()

  const logout = () => {
    setAuth(EMPTY_AUTH_ATOM)
    removeLsAuthUser()
    removeLsBearerToken()
    removeLsRefreshToken()

    navigate(PAGE_PATHS.home)
  }

  const handleLogout = () => {
    logoutMutation.mutate({
      data: {},
      onSuccess: logout,
      onError: logout,
    })
  }

  return { handleLogout, isLoading: logoutMutation.isPending }
}
