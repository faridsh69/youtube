import type { JSX } from 'react'

import type { ColorsEnum, FontsEnum, TagsEnum } from '../../enums/enums'

export type LabelProps = {
  label?: JSX.Element | string | number | null
  font?: FontsEnum
  disabled?: boolean
  linesCount?: number
  hasError?: boolean
  active?: boolean
  hint?: string
  forceTooltip?: boolean
  color?: ColorsEnum
  textAlign?: string
  required?: boolean
  htmlFor?: string
  onClick?: () => void
  cursorPointer?: boolean
  tag?: TagsEnum
  wrapperClassName?: string
}
