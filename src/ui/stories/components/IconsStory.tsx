import { ColorsEnum, Icon, IconsEnum, SizesEnum } from '@/ui'

import styles from '../UiKit.module.scss'

export const IconsStory = () => {
  return (
    <div className={styles.story}>
      <h4>1) Icons</h4>
      <small>
        We will have centralized place for all icons used in the application, there will be easy to
        find them in this story
      </small>
      <code>{'<Icon icon={IconsEnum.Check} color={ColorsEnum.Primary} />'}</code>
      <div className={styles.noWrapStory}>
        {Object.values(IconsEnum).map(icon => (
          <div key={icon} className={styles.iconsStory}>
            <Icon icon={icon} color={ColorsEnum.PrimaryDark} size={SizesEnum.M} />
            <div>{icon}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
