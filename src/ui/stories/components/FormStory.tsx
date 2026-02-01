import { useState } from 'react'
import {
  Button,
  Form,
  InputComponentsEnum,
  SCHEMAS,
  type FormInput,
  type FormSchemaType,
} from '@/ui'

import styles from '../UiKit.module.scss'

export const FormStory = () => {
  const [formData, setFormData] = useState({
    first_name: 'Jon',
    last_name: 'Adel',
    gender: 'male',
    salary: 123000,
    job: 'IT',
    role: 'Admin',
    accept_term_and_conditions: ['accept'],
    bio: 'This is my own bio',
  })

  const TEST_SCHEMA: FormSchemaType = SCHEMAS.wrapper({
    first_name: SCHEMAS.requiredString.min(5),
    last_name: SCHEMAS.requiredString.min(2),
    gender: SCHEMAS.mixed(['male', 'female']),
    bio: SCHEMAS.requiredString,
    role: SCHEMAS.mixed(['admin', 'guest']),
  })

  const onChangeInput = (formData: any) => {
    setFormData(formData)
  }

  const inputs: FormInput[] = [
    {
      name: 'first_name',
      label: 'First name',
      columns: 3,
      component: InputComponentsEnum.Text,
    },
    {
      name: 'last_name',
      label: 'Last name',
      columns: 3,
      component: InputComponentsEnum.Text,
      placeholder: 'Last name (with placeholder, required, debounce time)',
      required: true,
    },
    {
      name: 'salary',
      label: 'Salary',
      columns: 6,
      component: InputComponentsEnum.Text,
      unit: '$',
    },

    {
      name: 'role',
      columns: 6,
      component: InputComponentsEnum.Select,
      multiple: false,
      options: [
        {
          value: 'admin',
          label: 'Admin',
        },
        {
          value: 'guest',
          label: 'Guest',
        },
        {
          value: 3,
          label: 'User',
        },
      ],
    },
    {
      name: 'birth_date',
      columns: 6,
      component: InputComponentsEnum.Date,
    },
    {
      name: 'gender',
      columns: 3,
      component: InputComponentsEnum.RadioList,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      name: 'accept_term_and_conditions',
      columns: 4,
      component: InputComponentsEnum.Checklist,
      options: [
        {
          value: 'accept',
          label: 'Do you agree our terms?',
        },
        {
          value: 'email',
          label: 'Recieve email?',
        },
      ],
    },
    {
      name: 'Switch',
      columns: 2,
      component: InputComponentsEnum.Toggle,
    },
    // {
    //   name: 'has_disablity?',
    //   columns: 3,
    //   component: InputComponentsEnum.Checkbox,
    // },
    {
      name: 'bio',
      columns: 12,
      component: InputComponentsEnum.Textarea,
    },
  ]

  return (
    <div className={styles.story}>
      <h4>21) Form</h4>
      <pre>
        inputs: Form is a component that will build a form based on array of inputs in props.
        <br />
        schema: Form accepts an schema and do live validation based on that schema with statistics.
        <br />
        columns: For each input you can set width of the input based on 12 column grid.
        <br />
        onCahngeInput: You have access to current form data and current changed input via this
        callback.
        <br />
        Grouping fields: You can manage unlimit group in group inputs with not even 1 line of code.
      </pre>
      <div style={{ padding: 30, border: '1px solid #ccc', borderRadius: 10 }}>
        <Form
          inputs={inputs}
          schema={TEST_SCHEMA}
          values={formData}
          onChangeInput={onChangeInput}
          showValidationBar
        />
        <div style={{ float: 'right' }}>
          <Button onClick={() => {}} label='Submit' />
        </div>
      </div>
    </div>
  )
}
