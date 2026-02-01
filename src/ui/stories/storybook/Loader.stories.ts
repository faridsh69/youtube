import { Loader } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {},
}
