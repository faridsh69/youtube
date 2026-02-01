import { Select } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {
    label: 'Select',
    multiple: false,
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
    ],
  },
}
