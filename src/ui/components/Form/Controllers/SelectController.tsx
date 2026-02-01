import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { Select } from '../../Select/Select'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const SelectController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name,
    options = [],
    multiple = false,
    handleChangeSearch,
    ...rest
  } = props

  const handleChange = useCallback(
    (value: any, onChange: (data: any) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput, name],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Select
              onChange={(value: any) => handleChange(value, onChange)}
              options={options}
              value={value}
              multiple={multiple}
              hasError={!!error}
              onSearch={e => handleChangeSearch?.(e.target.value)}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
