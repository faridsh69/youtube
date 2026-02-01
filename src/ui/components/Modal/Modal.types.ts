import type { ReactNode } from 'react'

import type { VariantsEnum } from '../../enums/enums'
import type { ButtonProps } from '../Button/Button.types'

export type ModalProps = {
  title?: string | ReactNode
  body?: ReactNode
  actions?: ReactNode
  background?: boolean
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  zIndex?: number
  overlayZIndex?: number
  bodyPadding?: boolean
  width?: string | number
  closeOnClickOutside?: boolean
  variant?: VariantsEnum
}

export type MainLayerProps = {
  title?: string
  body?: ReactNode
  actions: ButtonProps[]
  handleCloseModal: () => void
  bodyPadding?: boolean
  hideHeader?: boolean
  actionsCenter?: boolean
}
