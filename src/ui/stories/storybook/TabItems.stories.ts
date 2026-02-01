import { TabItems } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/TabItems',
  component: TabItems,
  tags: ['autodocs'],
  argTypes: {
    direction: COMMON_ARGS.direction,
  },
}

export const Default = {
  args: {
    value: 1,
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
    ],
  },
}
