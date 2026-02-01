import { useState } from 'react'
import { SizesEnum, Textarea } from '@/ui'

import styles from '../UiKit.module.scss'

export const TextareaStory = () => {
  const [value, setValue] = useState('Value')

  const onChange = (e: any) => setValue(e.target.value)

  const props = {
    value,
    onChange,
    min: 5,
    max: 100,
    width: 400,
    rows: 7,
    label: 'Textarea',
    placeholder: 'Textarea',
  }

  return (
    <div className={styles.story}>
      <h4>7) Textarea</h4>
      <small>We have min, max that shows minimum and maximum lenght of content</small>
      <code>{'<Textarea min={20} max={100} width={400} rows={7} label="label" />'}</code>
      <Textarea {...props} size={SizesEnum.S} />
      <Textarea {...props} size={SizesEnum.M} />
      <Textarea {...props} size={SizesEnum.L} />
    </div>
  )
}
