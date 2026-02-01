import type { SizesEnum } from '../../enums/enums'

export type LoaderProps = {
  label?: string
  subLabel?: string
  size?: SizesEnum
  isLoading?: boolean
  inButton?: boolean
}
