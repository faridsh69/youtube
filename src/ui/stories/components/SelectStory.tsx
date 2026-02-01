import { useState } from 'react'
import {
  PlacementsEnum,
  Select,
  SelectTriggerComponents,
  SizesEnum,
  type OptionValueType,
  type SelectOption,
  type SelectProps,
} from '@/ui'

import styles from '../UiKit.module.scss'

export const SelectStory = () => {
  const [value, onChange] = useState<OptionValueType>(2)
  const [value2, onChange2] = useState<SelectOption[]>()
  const [isLoading, setIsLoading] = useState(false)

  const onSearch = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const AVATAR_URLS = [
    'https://s3p.sofifa.net/136be1f301e9a1b881d40d2a1f6744758d9b2bd1.png',
    'https://files.idyllic.app/files/static/2258051?width=256&optimizer=image',
    'https://dh5od79hpom3m.cloudfront.net/flags/de.svg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwR_rZSPvvl1u7DcpG3DhfD7oSD-NQfvMqqg&s',
  ]

  const SELECT_DEFAULT_STORY_LIST: SelectOption[] = [
    {
      value: 1,
      label: 'Long John',
      avatar: AVATAR_URLS[0],
      groupId: 1,
    },
    {
      value: 2,
      label: 'Danny Lilian',
      avatar: AVATAR_URLS[1],
      groupId: 1,
    },
    { value: '3', label: 'Long Johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' },
    {
      value: '4',
      label: 'Urgent',
      color: 'var(--error)',
      groupId: 2,
    },
  ]

  const SELECT_DEFAULT_PROPS: SelectProps = {
    multiple: false,
    size: SizesEnum.M,
    placement: PlacementsEnum.BottomStart,
    height: 350,
    isSearchable: true,
    showOnlySelecteds: false,
    disabled: false,
    trigger: {
      component: SelectTriggerComponents.Input,
    },
    options: SELECT_DEFAULT_STORY_LIST,
    value: SELECT_DEFAULT_STORY_LIST[1].value,
    onChange: () => {},
    onScrollToBottom: () => {},
    onSearch: () => {},
    label: '',
    required: true,
    hasError: false,
  }

  return (
    <div className={styles.story}>
      <h4>9) Select</h4>
      <small>A Select component that can be single or multiple</small>
      <code>{'<Select label="Countries"   />'}</code>

      <div className={styles.selects}>
        <div className={styles.select}>
          Single:
          <br />
          <br />
          <Select
            {...SELECT_DEFAULT_PROPS}
            multiple={false}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            onSearch={onSearch}
            trigger={{
              component: SelectTriggerComponents.Input,
              props: { placeholder: 'Search for a country' },
            }}
          />
          <br />
          <br />
          <br />
          {/* <Select
            {...SELECT_DEFAULT_PROPS}
            value={value}
            multiple={false}
            onChange={onChange}
            trigger={{
              component: SelectTriggerComponents.Button,
              props: { label: 'Button Label' }
            }}
          /> */}
        </div>
        <div className={styles.select}>
          Multiple:
          <br />
          <br />
          <Select {...SELECT_DEFAULT_PROPS} multiple value={value2} onChange={onChange2} />
          <br />
          <br />
          <br />
          {/* <Select
            {...SELECT_DEFAULT_PROPS}
            value={value2}
            onChange={onChange2}
            multiple
            trigger={{
              component: SelectTriggerComponents.Button,
              props: { label: 'Button Label' }
            }}
          /> */}
        </div>
      </div>
    </div>
  )
}
