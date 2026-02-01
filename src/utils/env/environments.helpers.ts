const ENVIRONMENTS = {
  production: 'production',
  development: 'development',
  staging: 'staging',
}

export const getIsProduction = () => {
  return process.env.NEXT_PUBLIC_ENV === ENVIRONMENTS.production
}
