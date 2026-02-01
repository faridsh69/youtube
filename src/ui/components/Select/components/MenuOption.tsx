import { clsx } from 'clsx'

import { BOLD_FONTS_SIZES_MAP, FONTS_SIZES_MAP } from '../../../constants/constants'
import { ColorsEnum, IconsEnum, SizesEnum } from '../../../enums/enums'
import { Checkbox } from '../../Checkbox/Checkbox'
import { Icon } from '../../Icon/Icon'
import { Label } from '../../Label/Label'
import type { MenuOptionProps } from '../Select.types'
import styles from '../Select.module.scss'

export const MenuOption = (props: MenuOptionProps) => {
  const { option, onClick, index, multiple, size = SizesEnum.M } = props

  const { label, icon, color, disabled, isSelected, isGroupOption } = option

  const handleClick = (e: any) => {
    e.preventDefault()

    onClick(option)
  }

  const hasOkIcon = isSelected && !multiple

  if (isGroupOption) {
    return (
      <Label
        label={label}
        font={FONTS_SIZES_MAP[size]}
        active
        wrapperClassName={clsx(styles.group, !!index && styles.hasBorderTop)}
      />
    )
  }

  return (
    <div className={clsx(styles.option, disabled && styles.disabled)} onClick={handleClick}>
      <Icon icon={icon} style={{ color }} />

      <Label
        label={label}
        font={isSelected ? BOLD_FONTS_SIZES_MAP[size] : FONTS_SIZES_MAP[size]}
        disabled={disabled}
        wrapperClassName={styles.label}
      />

      {multiple && (
        <div className={styles.checkbox}>
          {' '}
          <Checkbox checked={!!isSelected} size={size} color={color} />
        </div>
      )}

      {hasOkIcon && (
        <Icon icon={IconsEnum.Check} color={ColorsEnum.PrimaryMain} size={SizesEnum.S} />
      )}
    </div>
  )
}
