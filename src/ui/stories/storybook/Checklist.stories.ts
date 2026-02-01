import { CheckList } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Checklist',
  component: CheckList,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
    direction: COMMON_ARGS.direction,
  },
}

export const Default = {
  args: {
    label: 'Checklist',
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
    ],
  },
}
