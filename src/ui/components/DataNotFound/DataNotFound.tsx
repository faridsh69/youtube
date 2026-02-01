import { clsx } from 'clsx'

import { FontsEnum, SizesEnum } from '../../enums/enums'
import { Icon } from '../Icon/Icon'
import { Image } from '../Image/Image'
import { Label } from '../Label/Label'
import { Loader } from '../Loader/Loader'
import type { DataNotFoundProps } from './DataNotFound.types'
import styles from './DataNotFound.module.scss'

export const DataNotFound = (props: DataNotFoundProps) => {
  const { isLoading, label: propsLabel, icon, image, wrapperClassName } = props

  const finalLabel = propsLabel || 'No results found!'
  const label = isLoading ? 'Searching...' : finalLabel

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      {isLoading && <Loader label='' subLabel='' size={SizesEnum.L} />}
      {!isLoading && !image && <Icon icon={icon} className={styles.icon} />}
      {!isLoading && image && <Image src={image} alt='Not found' />}
      <Label label={label} font={FontsEnum.Text14} disabled linesCount={2} />
    </div>
  )
}
