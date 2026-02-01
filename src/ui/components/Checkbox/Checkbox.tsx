'use client'

import { clsx } from 'clsx'

import { IconsEnum, SizesEnum, TagsEnum } from '../../enums/enums'
import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import type { CheckboxProps } from './Checkbox.types'
import styles from './Checkbox.module.scss'

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    onChange,
    label,
    linesCount = 1,
    disabled = false,
    required = false,
    hasError = false,
    hint = '',
    size = SizesEnum.M,
    value,
  } = props

  return (
    <label className={clsx(styles.checkbox, styles[`size-${size}`])}>
      <input type='checkbox' checked={!!checked} onChange={e => onChange?.(e)} id={value} />
      <span className={styles.box}></span>
      <Icon icon={IconsEnum.Check} className={styles.mark} />
      <Label
        label={label}
        required={required}
        hasError={hasError}
        disabled={disabled}
        hint={hint}
        htmlFor={value}
        cursorPointer
        linesCount={linesCount}
        tag={TagsEnum.Label}
      />
    </label>
  )
}
