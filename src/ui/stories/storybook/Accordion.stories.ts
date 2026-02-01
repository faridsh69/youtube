import { Accordion } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {
    title: 'Accordion',
    content: 'Accordion Content',
  },
}
