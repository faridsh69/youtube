'use client'

import { useRef } from 'react'
import { FontsEnum, IconsEnum } from '@/ui/enums/enums'
import { getItemsCountPerRow } from '@/ui/helpers/ui.helpers'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { SliderProps } from './Slider.types'
import styles from './Slider.module.scss'

export const Slider = (props: SliderProps) => {
  const {
    label,
    description,
    options,
    SlideComponentProp,
    SlideComponent,
    count = getItemsCountPerRow(),
  } = props

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Label label={label} font={FontsEnum.Label24} />
          <Label label={description} font={FontsEnum.Text16} />
        </div>
        <div className={styles.navigation}>
          <button ref={prevRef}>
            <Icon icon={IconsEnum.ArrowLeft} />
          </button>
          <button ref={nextRef}>
            <Icon icon={IconsEnum.ArrowRight} />
          </button>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={20}
          slidesPerView={count}
          modules={[Navigation]}
          onBeforeInit={swiper => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {options.map(option => {
            const slideProps = { [SlideComponentProp]: option }
            return (
              <SwiperSlide key={option.id}>
                <SlideComponent {...slideProps} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
