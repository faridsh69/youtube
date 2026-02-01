import { isString } from '@/utils/variables/variables.helpers'
import { clsx } from 'clsx'

import { FontsEnum, SizesEnum } from '../../enums/enums'
import { Label } from '../Label/Label'
import { CharacterCounter } from './CharacterCounter'
import type { TextareaProps } from './Textarea.types'
import styles from './Textarea.module.scss'

export const Textarea = (props: TextareaProps) => {
  const {
    value = '',
    onChange,
    onBlur,
    label,
    disabled = false,
    size = SizesEnum.M,
    required,
    hasError,
    hint,
    min = 0,
    max,
    width,
    placeholder,
    isResizable = false,
    errorText,
    wrapperClassName,
    ...textareaProps
  } = props

  const valueLength = isString(value) ? value?.trim?.()?.length : 0
  const invalidLength = valueLength < min || (!!max && valueLength > max)
  const invalid = hasError || !!errorText || invalidLength

  return (
    <div className={clsx(styles.Textarea, wrapperClassName)} style={{ width }}>
      <Label
        label={label}
        font={FontsEnum.Text14}
        required={required}
        hasError={invalid}
        hint={hint}
        disabled={disabled}
      />
      <div
        className={clsx(
          styles.wrapper,
          styles[`size-${size}`],
          disabled && styles.disabled,
          !isResizable && styles.resizeNone,
        )}
      >
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={styles.textarea}
          {...textareaProps}
        />
        <CharacterCounter
          valueLength={valueLength}
          invalidLength={invalidLength}
          min={min}
          max={max}
        />
      </div>
      {errorText?.trim() && <Label label={errorText} hasError font={FontsEnum.Text14} />}
    </div>
  )
}
