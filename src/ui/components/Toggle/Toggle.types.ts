import type { SizesEnum } from '../../enums/enums'

export type ToggleProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  size?: SizesEnum
  disabled?: boolean
  hasError?: boolean
  required?: boolean
  hint?: string
}
