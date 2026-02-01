import { RadioList } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Radiolist',
  component: RadioList,

  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
    direction: COMMON_ARGS.direction,
  },
}

export const Default = {
  args: {
    label: 'Radiolist',
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
    ],
  },
}
