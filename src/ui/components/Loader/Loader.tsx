import { clsx } from 'clsx'

import { FontsEnum, SizesEnum } from '../../enums/enums'
import { Label } from '../Label/Label'
import type { LoaderProps } from './Loader.types'
import styles from './Loader.module.scss'

export const Loader = (props: LoaderProps) => {
  const {
    label = 'The page is currently loading.',
    subLabel = 'We appreciate your patience.',
    size = SizesEnum.M,
    isLoading = true,
    inButton = false,
  } = props

  if (!isLoading) return <></>

  return (
    <div className={styles.loaderWrapper}>
      <div className={clsx(styles.loader, inButton && styles.inButton, styles[`size-${size}`])} />

      {(label || subLabel) && (
        <div className={styles.texts}>
          <Label label={label} font={FontsEnum.Label14} />
          <Label label={subLabel} font={FontsEnum.Text12} />
        </div>
      )}
    </div>
  )
}
