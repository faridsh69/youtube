import { ContextMenu, IconsEnum } from '@/ui'

import styles from '../UiKit.module.scss'

export const ContextMenuStory = () => {
  return (
    <div className={styles.story}>
      <h4>10) ContextMenu</h4>
      <small>Context menu is a list of actions that can be triggered</small>
      <code>
        {'<ContextMenu options={[{ label:"click", onClick} triggerButtonProps={<div>test</div>} />'}
      </code>
      <ContextMenu
        triggerButtonProps={{
          label: 'New conversation',
          iconLeft: IconsEnum.Plus,
          width: 250,
        }}
        width={250}
        options={[
          {
            label: 'Post',
            icon: IconsEnum.Post,
            onClick: () => alert('sample'),
          },
          {
            label: 'Car',
            icon: IconsEnum.Check,
            onClick: () => alert('review'),
          },
        ]}
      />
    </div>
  )
}
