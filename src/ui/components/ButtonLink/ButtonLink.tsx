import Link from 'next/link'

import { ColorsEnum, SizesEnum } from '../../enums/enums'
import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import type { ButtonLinkProps } from './ButtonLink.types'
import styles from './ButtonLink.module.scss'

export const ButtonLink = (props: ButtonLinkProps) => {
  const { href, icon, color = ColorsEnum.PrimaryMain, ...labelProps } = props

  return (
    <Link href={href} className={styles.buttonLink} style={{ color }}>
      {icon && <Icon icon={icon} size={SizesEnum.S} />}
      <Label {...labelProps} />
    </Link>
  )
}
