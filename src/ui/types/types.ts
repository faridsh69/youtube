export type OptionValueType = string | number | null | undefined

export type TypeUseToggle = (defaultValue: boolean) => {
  isOpen: boolean
  handleToggle: () => void
  handleOpen: () => void
  handleClose: () => void
}
