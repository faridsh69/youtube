import { atom } from 'jotai'

export const DEFAULT_SHARE_MODAL = { isOpen: false, url: '' }

export const shareModalAtom = atom(DEFAULT_SHARE_MODAL)
