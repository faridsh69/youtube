import { Button } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: COMMON_ARGS.variant,
    size: COMMON_ARGS.size,
    iconLeft: COMMON_ARGS.icon,
    iconRight: COMMON_ARGS.icon,
  },
}

export const Default = {
  args: {
    label: 'Button',
  },
}
