import type { ReactNode } from 'react'

import type { ActionsEnum, ColorsEnum, IconsEnum, PlacementsEnum } from '../../enums/enums'
import type { ButtonProps } from '../Button/Button.types'

export type ContextMenuOptionType = {
  icon?: IconsEnum
  statusChipColor?: string
  label?: string
  onClick?: () => void
  options?: ContextMenuOptionType[]
  isSeparator?: boolean
  isSelected?: boolean
  disabled?: boolean
  color?: ColorsEnum
}

export type ContextMenuProps = {
  triggerOnAction?: ActionsEnum
  triggerButtonProps?: ButtonProps
  triggerNode?: ReactNode
  options?: ContextMenuOptionType[]
  zIndex?: number
  offset?: number
  disabled?: boolean
  placement?: PlacementsEnum
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  width?: string | number
}

export type MenuProps = {
  options: ContextMenuOptionType[]
  handleCloseMenu: () => void
  width?: string | number
  zIndex?: number
}

export type SubmenuProps = {
  subOptions: ContextMenuOptionType[]
  option: ContextMenuOptionType
  zIndex?: number
  handleCloseMenu: () => void
  isLast?: boolean
}

export type MenuOptionProps = {
  option: ContextMenuOptionType
  isLast?: boolean
  handleCloseMenu: () => void
  canHasSubmenu: boolean
  zIndex?: number
}

export type TriggerProps = {
  triggerNode: ReactNode
  triggerButtonProps: ButtonProps
  isOpen: boolean
  disabled?: boolean
}
