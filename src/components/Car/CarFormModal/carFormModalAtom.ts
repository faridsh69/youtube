import { atom } from 'jotai'

export const DEFAULT_CAR_FORM_MODAL = {
  id: '',
  title: '',
  description: '',
  rate: 0,
  isOpen: false,
  imageUrls: [],
}

export const carFormModalAtom = atom<any>(DEFAULT_CAR_FORM_MODAL)
