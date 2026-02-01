import { clsx } from 'clsx'
import Image from 'next/image'

import { FONTS_SIZES_MAP } from '../../constants/constants'
import { IconsEnum, SizesEnum, TextAlignEnum } from '../../enums/enums'
import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import type { ChipProps } from './Chip.types'
import styles from './Chip.module.scss'

export const Chip = (props: ChipProps) => {
  const {
    label,
    onClose,
    size = SizesEnum.M,
    icon: iconProps,
    active,
    width,
    noHover = false,
    onClick,
    image,
  } = props

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[`size-${size}`],
        noHover && styles.noHover,
        active && styles.active,
        !!image && styles.hasImage,
      )}
      style={{ width }}
      onClick={onClick}
    >
      {iconProps && <Icon icon={iconProps} size={size} />}
      {image && <Image src={image} alt={label || 'chip'} />}
      <Label
        label={label}
        font={FONTS_SIZES_MAP[size]}
        cursorPointer
        linesCount={2}
        textAlign={TextAlignEnum.Center}
      />
      {onClose && (
        <Icon
          icon={IconsEnum.Close}
          size={SizesEnum.S}
          onClick={onClose}
          className={styles.close}
        />
      )}
    </div>
  )
}
