'use client'

import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'

import { ZINDEXES } from '../../constants/constants'
import { ActionsEnum, PlacementsEnum } from '../../enums/enums'
import { Popover } from '../Popover/Popover'
import type { ContextMenuProps } from './ContextMenu.types'
import { Menu } from './Menu'
import { Trigger } from './Trigger'
import styles from './ContextMenu.module.scss'

export const ContextMenu = (props: ContextMenuProps) => {
  const {
    triggerOnAction = ActionsEnum.OnClick,
    triggerButtonProps = {},
    triggerNode,
    options = [],
    disabled = false,
    placement = PlacementsEnum.BottomEnd,
    zIndex = ZINDEXES.contextMenu,
    offset: propsOffset = 6,
    isOpen: propIsOpen = false,
    setIsOpen: propSetIsOpen,
    width,
  } = props

  const isActionRightClick = triggerOnAction === ActionsEnum.OnContextMenu

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen === isOpen) return

    setIsOpen(propIsOpen)
  }, [propIsOpen])

  useEffect(() => {
    if (propIsOpen === isOpen) return

    propSetIsOpen?.(isOpen)
  }, [isOpen])

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
  }, [propSetIsOpen])

  return (
    <Popover
      placement={placement}
      openOnAction={triggerOnAction}
      disabled={disabled}
      zIndex={zIndex}
      offset={isActionRightClick ? 0 : propsOffset}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      overlay={
        <Menu options={options} handleCloseMenu={handleCloseMenu} width={width} zIndex={zIndex} />
      }
    >
      <div className={clsx(styles.triggerWrapper)}>
        <Trigger
          triggerNode={triggerNode}
          triggerButtonProps={triggerButtonProps}
          isOpen={isOpen}
          disabled={disabled}
        />
      </div>
    </Popover>
  )
}
