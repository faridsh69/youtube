'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { useAtom } from 'jotai'
import NextImage from 'next/image'
import Skeleton from 'react-loading-skeleton'

import { imageModalAtom } from '../ImageModal/imageModalAtom'
import { ImageProps } from './Image.types'
import styles from './Image.module.scss'

export const Image = (props: ImageProps) => {
  const {
    src,
    alt = 'image',
    className,
    width,
    height,
    borderRadius = 0,
    openModalOnClick = true,
  } = props

  const finalWidth = width || height
  const finalHeight = height || width

  const IMAGE_STATES = {
    loading: 'loading',
    cached: 'cached',
    loaded: 'loaded',
  }

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(new Date().getTime())

  const [, setImageModal] = useAtom(imageModalAtom)

  const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('cover')

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget

    setObjectFit(naturalHeight > 1.3 * naturalWidth ? 'contain' : 'cover')

    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < 100) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }

  const handleClick = () => {
    if (!openModalOnClick) return

    setImageModal({ isOpen: true, src, alt })
  }

  return (
    <div
      className={clsx(styles.imgWrapper, borderRadius && styles.hasBorderRadius, className)}
      style={{ width: finalWidth, height: finalHeight, borderRadius }}
      onClick={handleClick}
    >
      {imageState === IMAGE_STATES.loading && <Skeleton width={finalWidth} height={finalHeight} />}
      <NextImage
        src={src}
        onLoad={handleLoad}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        fill={!finalWidth}
        style={{ objectFit }}
        className={clsx(
          styles.img,
          imageState === IMAGE_STATES.loading && styles.loading,
          imageState === IMAGE_STATES.cached && styles.cached,
        )}
      />
    </div>
  )
}
