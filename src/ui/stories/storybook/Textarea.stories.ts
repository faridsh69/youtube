import { Textarea } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {
    label: 'Textarea',
  },
}
