import { Form, InputComponentsEnum } from '@/ui'

export default {
  title: 'Uikit/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
}

export const Default = {
  args: {
    showValidationBar: true,
    inputs: [
      {
        name: 'first_name',
        label: 'First name',
        placeholder: 'Enter your first name',
        columns: 3,
        component: InputComponentsEnum.Text,
      },
    ],
  },
}
