'use client'

import { clsx } from 'clsx'

import { FontsEnum, IconsEnum, SizesEnum, TagsEnum } from '../../enums/enums'
import { useIsTextFit } from '../../hooks/useIsTextFit'
import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip'
import type { LabelProps } from './Label.types'
import styles from './Label.module.scss'

export const Label = (props: LabelProps) => {
  const {
    label = '',
    disabled = false,
    font = FontsEnum.Label16,
    linesCount = 1,
    hasError = false,
    active = false,
    hint = '',
    forceTooltip = false,
    color,
    textAlign = 'left',
    required = false,
    htmlFor,
    onClick,
    cursorPointer = false,
    tag: WrapperElement = TagsEnum.Span,
    wrapperClassName,
  } = props

  const { isFit, textRef } = useIsTextFit()

  if (!label) return <></>

  const style = {
    color,
    font: `var(--font-${font})`,
    '--lines-count': linesCount,
  }

  return (
    <WrapperElement
      className={clsx(styles.wrapper, cursorPointer && styles.cursorPointer, wrapperClassName)}
      style={{ textAlign: textAlign as any }}
      htmlFor={htmlFor}
      onClick={onClick}
    >
      <Tooltip overlay={label} disabled={isFit && !forceTooltip}>
        <div
          ref={textRef}
          className={clsx(
            styles.text,
            disabled && styles.disabled,
            hasError && styles.hasError,
            active && styles.active,
            cursorPointer && styles.cursorPointer,
            linesCount === 1 && styles.oneLine,
            linesCount > 1 && styles.multiLines,
          )}
          style={style}
        >
          {label}
          {required && ' *'}
        </div>
      </Tooltip>
      {hint && (
        <Tooltip overlay={hint}>
          <Icon icon={IconsEnum.Info} className={styles.hint} size={SizesEnum.M} />
        </Tooltip>
      )}
    </WrapperElement>
  )
}
