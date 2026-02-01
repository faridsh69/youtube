import { CORE_API_CLIENT } from '../apiClients/apiClients'

export type TypeAdminAuthUserEmailpass = { email: string; password: string }

export const postAdminAuthUserEmailpassApi = (data: TypeAdminAuthUserEmailpass) =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/user/emailpass',
    data,
  })
