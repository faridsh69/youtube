import { useCallback } from 'react'
import { clsx } from 'clsx'

import { FontsEnum, SizesEnum, TagsEnum } from '../../enums/enums'
import { Label } from '../Label/Label'
import type { RadioProps } from './Radio.types'
import styles from './Radio.module.scss'

export const Radio = (props: RadioProps) => {
  const { checked, onClick, disabled, label, hasError, required, hint, size = SizesEnum.M } = props

  const onclickHandler = useCallback(() => {
    if (disabled) return

    onClick?.()
  }, [disabled, onClick])

  return (
    <label className={clsx(styles.wrapper, styles[`size-${size}`])}>
      <input type='radio' checked={checked} disabled={disabled} onChange={onclickHandler} />

      <span className={styles.box}>{checked && <span className={styles.mark}></span>}</span>

      <Label
        label={label}
        font={FontsEnum.Text16}
        required={required}
        hasError={hasError}
        hint={hint}
        disabled={disabled}
        wrapperClassName={styles.label}
        onClick={onclickHandler}
        tag={TagsEnum.Label}
      />
    </label>
  )
}
