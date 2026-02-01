import { FontsEnum, Image, Label, Rating, SizesEnum } from '@/ui'

import styles from './CarCard.module.scss'

type CarCardProps = { car: any }

export const CarCard = (props: CarCardProps) => {
  const { car } = props

  const { user_id } = car.user || {}

  return (
    <div className={styles.CarCard}>
      <div className={styles.header}>
        <div className={styles.userinfo}>{user_id}</div>
      </div>
      <Rating value={car.rate} size={SizesEnum.S} noHover={true} />
      <Label
        label={<p dangerouslySetInnerHTML={{ __html: car.title }} />}
        font={FontsEnum.Label18}
        linesCount={10}
      />
      <Label
        label={<p dangerouslySetInnerHTML={{ __html: car?.description }} />}
        font={FontsEnum.Text14}
        linesCount={10}
      />

      {!!car.image_urls?.length && (
        <div className={styles.images}>
          {car.image_urls.map((src: string) => {
            return (
              <Image
                key={src}
                src={src}
                width={120}
                height={100}
                borderRadius={12}
                className={styles.image}
                alt={car.title}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
