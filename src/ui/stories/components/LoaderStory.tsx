import { Loader, SizesEnum } from '@/ui'

import styles from '../UiKit.module.scss'

export const LoaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>20) Loader</h4>
      <Loader size={SizesEnum.S} label='Loading' />
      <Loader size={SizesEnum.M} />
      <Loader size={SizesEnum.L} />
    </div>
  )
}
