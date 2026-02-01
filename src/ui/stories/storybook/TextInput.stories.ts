import { TextInput } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    variant: COMMON_ARGS.variant,
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {
    label: 'TextInput',
  },
}
