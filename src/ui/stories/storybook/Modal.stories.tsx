import { Button, FontsEnum, Label, Modal, TextInput, VariantsEnum } from '@/ui'

import { COMMON_ARGS } from './stories.helpers'

export default {
  title: 'Uikit/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    variant: COMMON_ARGS.variant,
  },
}

export const Default = {
  args: {
    isOpen: true,
    title: 'Login',
    width: 500,
    bodyPadding: true,
    body: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Label
          font={FontsEnum.Text16}
          linesCount={3}
          textAlign='center'
          label='Get started by entering your email. We’ll check to see if you have an account with us.'
        />
        <TextInput label='Email' type='email' placeholder='Email address' />
      </div>
    ),
    actions: (
      <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
        <Button label='Continue with Email' width={'100%'} />
        or
        <Button label='Continue with Gmail' variant={VariantsEnum.Secondary} width={'100%'} />
      </div>
    ),
  },
}
