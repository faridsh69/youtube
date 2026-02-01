import { Skelet } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Skelet',
  component: Skelet,
  tags: ['autodocs'],
  argTypes: {
    variant: COMMON_ARGS.skelet,
  },
}

export const Default = {
  args: {
    label: '',
  },
}
