import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { FileUploader } from '../../FileUploader/FileUploader'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const UploaderController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: string[], onChange: (v: string[]) => void) => {
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
            <FileUploader
              value={value}
              onChange={value => handleChange(value, onChange)}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
