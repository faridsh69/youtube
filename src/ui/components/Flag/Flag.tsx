import { CountriesEnum } from '@/ui/enums/enums'

import AuFlag from './flags/AU.svg'
import ClFlag from './flags/CL.svg'
import SpFlag from './flags/ES.svg'
import FranceFlag from './flags/FR.svg'
import italyFlag from './flags/IT.svg'
import UsFlag from './flags/US.svg'

type FlagProps = {
  country: CountriesEnum
  width?: number | string
}

export const Flag = (props: FlagProps) => {
  const { country, width = 18 } = props

  const mapping = {
    [CountriesEnum.Fr]: FranceFlag,
    [CountriesEnum.It]: italyFlag,
    [CountriesEnum.Us]: UsFlag,
    [CountriesEnum.Cl]: ClFlag,
    [CountriesEnum.Sp]: SpFlag,
    [CountriesEnum.Au]: AuFlag,
  }

  const src = mapping[country]

  return <img src={src} alt={country} width={width} />
}
