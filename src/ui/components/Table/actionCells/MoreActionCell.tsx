import { ZINDEXES } from '@/ui/constants/constants'
import { ActionsEnum, IconsEnum, PlacementsEnum } from '@/ui/enums/enums'

import { ContextMenu } from '../../ContextMenu/ContextMenu'
import { Icon } from '../../Icon/Icon'
import { MoreActionCellProps } from '../Table.types'
import { ActionCellWrapper } from './ActionCellWrapper'
import styles from '../Table.module.scss'

export const MoreActionCell = (props: MoreActionCellProps) => {
  const { options = [], disabled, width = 200 } = props

  return (
    <ActionCellWrapper onClick={() => {}} disabled={disabled}>
      <ContextMenu
        options={options}
        disabled={disabled}
        triggerOnAction={ActionsEnum.OnClick}
        triggerNode={
          <div className={styles.actionCellWrapper}>
            <Icon icon={IconsEnum.Dots} />
          </div>
        }
        width={width}
        zIndex={ZINDEXES.contextMenu}
        placement={PlacementsEnum.BottomEnd}
      />
    </ActionCellWrapper>
  )
}
