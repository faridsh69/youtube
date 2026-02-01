import { FontsEnum } from '@/ui/enums/enums'

import { Label } from '../../Label/Label'
import { TitleCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const TitleCell = (props: TitleCellProps) => {
  const { label, subLabel, color } = props

  return (
    <div className={styles.titleCell} style={{ color }}>
      {label && <Label label={label} font={FontsEnum.Label14} />}
      <Label label={subLabel} font={FontsEnum.Text12} />
    </div>
  )
}
