import { Button } from '../../Button/Button'
import { TextInput } from '../../TextInput/TextInput'
import { SelectTriggerComponents } from '../Select.enums'
import type { TriggerComponentops } from '../Select.types'
import styles from '../Select.module.scss'

export const Trigger = (props: TriggerComponentops) => {
  const {
    triggerSelectedOption,
    size,
    disabled,
    trigger,
    isActive,
    handleClearInput,
    width,
    clearable,
    label,
    placeholder,
    required,
    hasError,
    hint,
  } = props

  const trigerLabel = trigger.props?.label || label

  if (trigger.component === SelectTriggerComponents.Button) {
    return (
      <Button
        {...trigger.props}
        label={trigerLabel}
        disabled={disabled}
        size={size}
        active={isActive}
      />
    )
  }

  const trigerPlaceholder = trigger.props?.placeholder || placeholder || 'Please select'

  return (
    <div className={styles.trigger} style={{ width }}>
      <TextInput
        {...trigger.props}
        label={trigerLabel}
        placeholder={trigerPlaceholder}
        value={triggerSelectedOption.label}
        icon={triggerSelectedOption.icon}
        iconColor={triggerSelectedOption.color}
        disabled={disabled}
        clearable={clearable}
        onClear={handleClearInput}
        active={isActive}
        size={size}
        required={required}
        hasError={hasError}
        hint={hint}
        withHandle={true}
        readOnly={true}
      />
    </div>
  )
}
