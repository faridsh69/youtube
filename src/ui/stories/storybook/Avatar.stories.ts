import { Avatar } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: COMMON_ARGS.size,
  },
}

export const Farid = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/24242843?s=96&v=4',
  },
}

export const Default = {
  args: {
    src: '',
  },
}
