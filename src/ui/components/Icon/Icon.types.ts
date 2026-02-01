import type { CSSProperties } from 'react'

import type { ColorsEnum, IconsEnum, SizesEnum } from '../../enums/enums'

export type IconProps = {
  icon?: IconsEnum | null
  size?: SizesEnum
  color?: ColorsEnum
  className?: string
  style?: CSSProperties
  onClick?: () => void
}
