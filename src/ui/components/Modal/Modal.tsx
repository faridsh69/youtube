'use client'

import { useCallback, useEffect, useState } from 'react'
import { isString } from '@/utils/variables/variables.helpers'
import { clsx } from 'clsx'
import { createPortal } from 'react-dom'

import { ZINDEXES } from '../../constants/constants'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from '../../enums/enums'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import type { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'

export const Modal = (props: ModalProps) => {
  const {
    title,
    body,
    actions,
    zIndex = ZINDEXES.modal,
    overlayZIndex = ZINDEXES.modalOverlay,
    isOpen: propIsOpen = true,
    setIsOpen: propSetIsOpen,
    bodyPadding = false,
    width,
    closeOnClickOutside = false,
    variant = VariantsEnum.Primary,
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen !== isOpen) setIsOpen(propIsOpen)
  }, [propIsOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
  }, [propSetIsOpen])

  const clickoutsideRef = useClickOutside(handleClose, isOpen && closeOnClickOutside)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (!isOpen) return

    setTimeout(() => {
      setIsHidden(false)
    }, 0)
  }, [isOpen])
  if (!isOpen) return <></>

  return createPortal(
    <div className={styles.overlay} style={{ zIndex: overlayZIndex }}>
      <div
        className={clsx(styles.modal, isHidden && styles.isHidden)}
        style={{ zIndex, width }}
        ref={clickoutsideRef}
      >
        <div className={clsx(styles.main, variant && styles[`variant-${variant}`])}>
          <div className={styles.header}>
            <div className={styles.title}>
              {!isString(title) ? title : <Label label={title} font={FontsEnum.Label18} />}
            </div>
            <Button
              variant={VariantsEnum.Text}
              size={SizesEnum.S}
              iconLeft={IconsEnum.Close}
              onClick={handleClose}
            />
          </div>
          <div className={clsx(styles.body, bodyPadding && styles.bodyPadding)}>
            {body}
            <div className={clsx(styles.footer)}>{actions}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
