import {
  ColorsEnum,
  DirectionsEnum,
  FontsEnum,
  IconsEnum,
  SizesEnum,
  SkeletVariants,
  TextAlignEnum,
  VariantsEnum,
} from '@/ui'

export const COMMON_ARGS = {
  variant: {
    options: Object.values(VariantsEnum),
    control: { type: 'radio' },
  },
  size: {
    options: Object.values(SizesEnum),
    control: { type: 'radio' },
  },
  direction: {
    options: Object.values(DirectionsEnum),
    control: { type: 'radio' },
  },
  textAlign: {
    options: Object.values(TextAlignEnum),
    control: { type: 'radio' },
  },
  skelet: {
    options: Object.values(SkeletVariants),
    control: { type: 'radio' },
  },
  font: {
    options: Object.values(FontsEnum),
    control: { type: 'select' },
  },
  color: {
    options: Object.values(ColorsEnum),
    control: { type: 'select' },
  },
  icon: {
    options: Object.values(IconsEnum),
    control: { type: 'select' },
  },
}
