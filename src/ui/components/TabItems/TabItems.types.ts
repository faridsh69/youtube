import type { ColorsEnum, DirectionsEnum, IconsEnum } from '../../enums/enums'

export type TabItemsOption = {
  value: string
  label?: string
  icon?: IconsEnum
  disabled?: boolean
  color?: ColorsEnum
  badge?: number
}

export type TabItemsProps = {
  options?: TabItemsOption[]
  value?: string
  onChange?: (value: string) => void
  background?: boolean
  direction?: DirectionsEnum
}
