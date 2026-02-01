import { Avatar, SizesEnum } from '@/ui'

import styles from '../UiKit.module.scss'

export const AvatarsStory = () => {
  return (
    <div className={styles.story}>
      <h4>13) Avatar</h4>
      <small>We have avatar to show user profile picture</small>
      <code>{'<Avatar src="src" />'}</code>
      <div>
        <div className={styles.iconsStory}>
          <Avatar src={''} size={SizesEnum.M} />
          <Avatar src={''} size={SizesEnum.S} />
        </div>
      </div>
    </div>
  )
}
