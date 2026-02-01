import { Chip } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
    icon: COMMON_ARGS.icon,
  },
}

export const Default = {
  args: {
    label: 'Chip',
  },
}
