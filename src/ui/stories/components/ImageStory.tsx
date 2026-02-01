import { Image } from '@/ui'

import styles from '../UiKit.module.scss'

export const ImageStory = () => {
  const propsArray: any[] = []

  const bigSrc =
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
  const longSrc =
    'https://www.istockphoto.com/resources/images/PhotoFTLP/P1-regional-iStock-1985150440.jpg'

  propsArray.push({
    width: 400,
    height: 250,
  })
  propsArray.push({
    width: 200,
  })
  propsArray.push({
    height: 100,
  })
  propsArray.push({})

  return (
    <div className={styles.story}>
      <h4>23) Image </h4>
      <code> {'<Image src={} />'}</code>
      <small>Load image with default loading skelet before image is loading</small>
      <div>
        {[bigSrc, longSrc].map(src => {
          return (
            <div key={src} className={styles.imageStory}>
              {propsArray.map(({ width, height }, index) => {
                return (
                  <div key={index}>
                    {width} {height}
                    <br />
                    <br />
                    <Image
                      alt='big size image'
                      src={src}
                      borderRadius={10}
                      height={height}
                      width={width}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
