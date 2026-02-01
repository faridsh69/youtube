import type { IconsEnum } from '../../enums/enums'
import type { LabelProps } from '../Label/Label.types'

export type ButtonLinkProps = LabelProps & { href: string; icon?: IconsEnum }
