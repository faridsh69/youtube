import { atom } from 'jotai'

export const DEFAULT_CONFIRM_MODAL_ATOM = {
  isOpen: false,
  label: '',
  subLabel: '',
  onConfirm: () => {},
  onCancel: () => {},
}

export const confirmModalAtom = atom(DEFAULT_CONFIRM_MODAL_ATOM)
