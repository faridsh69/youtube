import { Icon, IconsEnum } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Default = {
  args: {
    icon: IconsEnum.Basket,
    color: 'red',
  },
}
