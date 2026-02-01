import { Label } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: COMMON_ARGS.color,
    font: COMMON_ARGS.font,
  },
}

export const Default = {
  args: {
    label: 'Label',
  },
}
