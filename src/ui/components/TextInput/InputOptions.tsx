import type { ChangeEvent } from 'react'
import { useCallback } from 'react'
import { clsx } from 'clsx'

import { IconsEnum, SizesEnum, VariantsEnum } from '../../enums/enums'
import { Button } from '../Button/Button'
import type { ButtonProps } from '../Button/Button.types'
import { Icon } from '../Icon/Icon'
import type { InputOptionsProps } from './TextInput.types'
import styles from './TextInput.module.scss'

export const InputOptions = (props: InputOptionsProps) => {
  const {
    size,
    active,
    disabled,
    onChange,
    unit,
    withHandle,
    clearable,
    copyable,
    hideable,
    visible = true,
    setVisible,
    onClear,
  } = props

  const handleClear = useCallback(() => {
    onChange?.({
      target: { value: '' },
    } as ChangeEvent<HTMLInputElement>)
    onClear?.()
  }, [onChange, onClear])

  const handleHide = useCallback(() => {
    setVisible(!visible)
  }, [visible, setVisible])

  const showUnit = !withHandle && unit
  const showClear = clearable && !disabled
  const showCopy = copyable && !showClear
  const showHide = hideable && !showClear && !showCopy
  const showSeparator = unit && (showClear || showCopy || showHide) && !withHandle

  const buttonProps: ButtonProps = {
    variant: VariantsEnum.Text,
    size,
    noHover: true,
  }

  // const handleCopy = useCallback(() => {
  //   if (!value) return
  //   copyToClipboard('' + value)
  // }, [value])

  return (
    <div className={styles.options}>
      {withHandle && (
        <div className={styles.handle}>
          <Icon icon={active ? IconsEnum.ArrowLeft : IconsEnum.ArrowDown} style={{ width: 12 }} />
        </div>
      )}
      {showUnit && <div className={styles.unit}>{unit}</div>}
      {showSeparator && <div className={styles.separator} />}

      {showClear && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button
            iconRight={IconsEnum.Close}
            onClick={handleClear}
            {...buttonProps}
            size={SizesEnum.S}
          />
        </div>
      )}

      {showHide && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button
            iconRight={visible ? IconsEnum.Visible : IconsEnum.Invisible}
            onClick={handleHide}
            {...buttonProps}
          />
        </div>
      )}

      {/* {showCopy && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button icon={IconsEnum.Copy} onClick={handleCopy} {...buttonProps} />
        </div>
      )} */}
    </div>
  )
}
