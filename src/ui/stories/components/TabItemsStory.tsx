import { useState } from 'react'
import { DirectionsEnum, TabItems } from '@/ui'

import styles from '../UiKit.module.scss'

export const TabItemsStory = () => {
  const [value, setValue] = useState<string>('1')

  return (
    <div className={styles.story}>
      <h4>11) TabItems</h4>
      <small>
        TabItems is a list of tabs that can be triggered, has options, value and onChange
      </small>
      <code>{'<TabItems options={[{value:1, label: 1}]} value onChange />'}</code>

      <TabItems
        value={value}
        onChange={setValue}
        direction={DirectionsEnum.Horizontal}
        options={[
          {
            label: 'Tab1',
            value: '1',
          },
          {
            label: 'Tab2',
            value: '2',
          },
          {
            label: 'Tab3',
            value: '3',
            badge: 2,
          },
        ]}
      />
    </div>
  )
}
