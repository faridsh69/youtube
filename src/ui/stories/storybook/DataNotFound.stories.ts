import { DataNotFound } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/DataNotFound',
  component: DataNotFound,
  tags: ['autodocs'],
  argTypes: {
    icon: COMMON_ARGS.icon,
  },
}

export const Default = {
  args: {
    label: '',
  },
}
