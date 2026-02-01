import type { DirectionsEnum, SizesEnum } from '../../enums/enums'
import type { OptionValueType } from '../../types/types'

export type ChipListOption = {
  value: OptionValueType
  label: string
}

export type ChipsListProps = {
  options?: ChipListOption[]
  value?: OptionValueType[]
  onChange?: (value: OptionValueType[]) => void
  size?: SizesEnum
  direction?: DirectionsEnum
  label?: string
  required?: boolean
  hasError?: boolean
  disabled?: boolean
  hint?: string
  background?: boolean
  width?: string | number
}
