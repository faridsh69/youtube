import type { TextareaHTMLAttributes } from 'react'

import type { SizesEnum } from '../../enums/enums'

export interface TextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className' | 'size'
> {
  label?: string
  size?: SizesEnum
  hasError?: boolean
  hint?: string
  isResizable?: boolean

  width?: string | number
  placeholder?: string
  errorText?: string

  min?: number
  max?: number
  wrapperClassName?: string
}

export type CharacterCounterProps = {
  valueLength?: number
  min?: number
  max?: number
  invalidLength?: boolean
}
