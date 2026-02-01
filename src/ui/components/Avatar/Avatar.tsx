import { clsx } from 'clsx'

import { SizesEnum } from '../../enums/enums'
import { Image } from '../Image/Image'
import type { AvatarProps } from './Avatar.types'
import defaultSrc from './default_avatar.jpeg'
import styles from './Avatar.module.scss'

export const Avatar = (props: AvatarProps) => {
  const { alt = 'user avatar', size = SizesEnum.M, width } = props

  const skeletLength = width ? width : size === SizesEnum.M ? 40 : size === SizesEnum.L ? 96 : 26

  const src = props.src?.includes('avatars.githubusercontent.com') ? '' : props.src

  return (
    <div
      className={clsx(styles.avatar, !width && styles[`size-${size}`])}
      style={{ width, height: width }}
    >
      {!!src && <Image src={src} alt={alt} width={skeletLength} height={skeletLength} />}
      {!src && <Image src={defaultSrc.src} alt={alt} width={skeletLength} height={skeletLength} />}
    </div>
  )
}
