import { FontsEnum } from '@/ui/enums/enums'
import { formatCurrency } from '@/utils/variables/number.helpers'
import { clsx } from 'clsx'

import { Icon } from '../../Icon/Icon'
import { Label } from '../../Label/Label'
import { PriceCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const PriceCell = (props: PriceCellProps) => {
  const {
    label = 0,
    subLabel = '€',
    bold = false,
    icon,
    font: propsFont,
    color,
    textAlign = 'right',
  } = props

  const font = propsFont ? propsFont : bold ? FontsEnum.Header14 : FontsEnum.Text12

  return (
    <div className={clsx(styles.priceCell)} style={{ textAlign }}>
      <Icon icon={icon} className={styles.cellIcon} />
      <Label label={formatCurrency(label)} font={font} color={color} />
      <Label label={subLabel} disabled color={color} />
    </div>
  )
}
