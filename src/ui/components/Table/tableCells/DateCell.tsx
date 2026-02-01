import { IconsEnum, SizesEnum } from '@/ui/enums/enums'
import { getRelativeTime } from '@/utils/variables/time.helper'

import { Chip } from '../../Chip/Chip'
import { Icon } from '../../Icon/Icon'
import { Label } from '../../Label/Label'
import { TABLE_NO_DATA } from '../Table.constants'
import { DateCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const DateCell = (props: DateCellProps) => {
  const { label = '', icon = IconsEnum.Check, showDateDiff = true, showDate = true } = props

  const diff = getRelativeTime('' + label)

  return (
    <div className={styles.tdCell}>
      <Icon icon={icon} className={styles.cellIcon} />
      {showDate && <Label label={label || TABLE_NO_DATA} />}
      {label && showDateDiff && <Chip label={diff} size={SizesEnum.S} />}
    </div>
  )
}
