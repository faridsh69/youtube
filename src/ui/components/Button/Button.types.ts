import { MouseEventHandler } from 'react'

import type { FontsEnum, IconsEnum, SidesEnum, SizesEnum, VariantsEnum } from '../../enums/enums'

export type ButtonProps = {
  label?: string
  variant?: VariantsEnum
  size?: SizesEnum
  active?: boolean
  disabled?: boolean
  iconLeft?: IconsEnum
  iconRight?: IconsEnum
  onClick?: MouseEventHandler<HTMLButtonElement>
  noBorderRadius?: SidesEnum[]
  width?: string | number
  font?: FontsEnum
  noHover?: boolean
  isLoading?: boolean
}
