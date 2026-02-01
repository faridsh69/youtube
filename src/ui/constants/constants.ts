import { FontsEnum, SizesEnum } from '../enums/enums'

export const ZINDEXES = {
  modalOverlay: 100,
  modal: 110,
  popover: 120,
  contextMenu: 130,
  select: 140,
  toast: 150,
  tooltip: 160,
}

export const DEFAULT_DEBOUNCE_TIME = 300

export const FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Text14,
  [SizesEnum.M]: FontsEnum.Text16,
  [SizesEnum.L]: FontsEnum.Text18,
}

export const BOLD_FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Header14,
  [SizesEnum.M]: FontsEnum.Header16,
  [SizesEnum.L]: FontsEnum.Header18,
}
