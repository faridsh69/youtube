'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

import { DirectionsEnum, FontsEnum, SizesEnum } from '../../enums/enums'
import type { OptionValueType } from '../../types/types'
import { Checkbox } from '../Checkbox/Checkbox'
import { Label } from '../Label/Label'
import type { CheckListProps } from './CheckList.types'
import styles from './CheckList.module.scss'

export const CheckList = (props: CheckListProps) => {
  const {
    options = [],
    value: propsValue = [],
    onChange,
    size = SizesEnum.M,
    direction = DirectionsEnum.Horizontal,
    label,
    required,
    hasError,
    hint,
    disabled,
    background = false,
    width,
  } = props

  const [value, setValue] = useState<OptionValueType[]>(propsValue)

  useEffect(() => {
    setValue(prevValue => (propsValue === prevValue ? prevValue : propsValue))
  }, [propsValue.length])

  const onChangeHandler = (val: OptionValueType) => {
    const newVal = value.includes(val) ? value?.filter?.(v => v !== val) : [...value, val]

    setValue(newVal || [])
    onChange?.(newVal || [])
  }

  return (
    <div className={styles.CheckList} style={{ width }}>
      <Label
        label={label}
        font={FontsEnum.Label14}
        required={required}
        hasError={hasError}
        hint={hint}
        disabled={disabled}
      />
      <div
        className={clsx(
          styles.wrapper,
          styles[`size-${size}`],
          styles[direction],
          background && styles.background,
        )}
      >
        {options.map(option => {
          return (
            <div key={option.label}>
              <Checkbox
                key={option.label}
                checked={value?.includes?.(option.value)}
                size={size}
                onChange={() => onChangeHandler(option.value)}
                label={option.label}
                disabled={disabled}
                value={option.value as string}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
