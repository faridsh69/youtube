import { Breadcrumb } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Breadcrumb',
  component: Breadcrumb,
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
    label: 'Breadcrumb',
    options: [
      { href: '1', label: 'One' },
      { href: '2', label: 'Two' },
      { href: '3', label: 'Three' },
    ],
  },
}
