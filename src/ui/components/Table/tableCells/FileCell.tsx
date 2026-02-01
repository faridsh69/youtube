import { ZINDEXES } from '@/ui/constants/constants'
import { FontsEnum, IconsEnum, PlacementsEnum } from '@/ui/enums/enums'
import clsx from 'clsx'

import { ContextMenu } from '../../ContextMenu/ContextMenu'
import { Icon } from '../../Icon/Icon'
import { Label } from '../../Label/Label'
import { FileCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const FileCell = (props: FileCellProps) => {
  const { documents = [], onViewClicked, onDownloadClicked } = props

  const options = [
    {
      icon: IconsEnum.View,
      label: 'view',
      onClick: onViewClicked,
    },
    {
      icon: IconsEnum.ArrowDown,
      label: 'download',
      onClick: onDownloadClicked,
    },
  ]

  const noDoc = !documents.length
  const oneDoc = documents.length === 1
  const multiDoc = documents.length > 1

  return (
    <ContextMenu
      triggerNode={
        <div className={clsx(styles.custom, styles.fileCellWrapper)}>
          {noDoc && (
            <>
              <Icon icon={IconsEnum.Dots} />
              <Label label={'no file uploaded'} font={FontsEnum.Text12} />
            </>
          )}

          {oneDoc && (
            <>
              <Label label={documents[0].name} font={FontsEnum.Text12} />
            </>
          )}

          {multiDoc && (
            <>
              <Icon icon={IconsEnum.Dots} className='noFileIcon' />
              <Label label={`${documents.length} ${'files'}`} font={FontsEnum.Text12} />
            </>
          )}
        </div>
      }
      options={options}
      width={200}
      zIndex={ZINDEXES.contextMenu}
      offset={12}
      placement={PlacementsEnum.BottomStart}
    />
  )
}
