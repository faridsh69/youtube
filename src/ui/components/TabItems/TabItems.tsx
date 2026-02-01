import { clsx } from 'clsx'

import { DirectionsEnum } from '../../enums/enums'
import type { TabItemsProps } from './TabItems.types'
import styles from './TabItems.module.scss'

export const TabItems = (props: TabItemsProps) => {
  const { options = [], onChange, value, direction = DirectionsEnum.Horizontal } = props

  return (
    <div className={clsx(styles.wrapper, styles[direction])}>
      {options.map(option => {
        const { label, value: optionValue, icon, disabled, badge } = option

        return (
          <div
            key={optionValue}
            onClick={() => onChange?.(optionValue)}
            className={clsx(
              styles.tabItem,
              value === optionValue && styles.active,
              disabled && styles.disabled,
            )}
          >
            {icon && icon}
            {label}
            {!!badge && <div className={styles.badge}>{badge > 99 ? '99+' : badge}</div>}
          </div>
        )
      })}
    </div>
  )
}
