import { ColorsEnum, IconsEnum, SizesEnum } from '../../enums/enums'
import type { IconProps } from './Icon.types'
import ArrowDownIcon from './svgPaths/ArrowDownIcon'
import ArrowLeftIcon from './svgPaths/ArrowLeftIcon'
import ArrowRightIcon from './svgPaths/ArrowRightIcon'
import ArrowTopRightIcon from './svgPaths/ArrowTopRightIcon'
import BasketIcon from './svgPaths/BasketIcon'
import BurgurIcon from './svgPaths/BurgerIcon'
import CarIcon from './svgPaths/CarIcon'
import CheckIcon from './svgPaths/CheckIcon'
import CloseBoldIcon from './svgPaths/CloseBoldIcon'
import CommentIcon from './svgPaths/CommentIcon'
import DotsIcon from './svgPaths/DotsIcon'
import ErrorIcon from './svgPaths/ErrorIcon'
import FiltersIcon from './svgPaths/FiltersIcon'
import GeoIcon from './svgPaths/GeoIcon'
import InfoIcon from './svgPaths/InfoIcon'
import InvisibleIcon from './svgPaths/InvisibleIcon'
import LikeIcon from './svgPaths/LikeIcon'
import MinesIcon from './svgPaths/MinesIcon'
import NightIcon from './svgPaths/NightIcon'
import PlusIcon from './svgPaths/PlusIcon'
import PostIcon from './svgPaths/Postcon'
import ShareIcon from './svgPaths/ShareIcon'
import SortIcon from './svgPaths/SortIcon'
import SuccessIcon from './svgPaths/SuccessIcon'
import TagIcon from './svgPaths/TagIcon'
import UserIcon from './svgPaths/UserIcon'
import ViewIcon from './svgPaths/ViewIcon'
import VisibleIcon from './svgPaths/VisibleIcon'
import WarningIcon from './svgPaths/WarningIcon'

const mapping = {
  [IconsEnum.View]: {
    Path: ViewIcon,
    viewBox: '10 10',
  },
  [IconsEnum.ArrowRight]: {
    Path: ArrowRightIcon,
    viewBox: '10 10',
  },
  [IconsEnum.Close]: {
    Path: CloseBoldIcon,
    viewBox: '12 12',
  },
  [IconsEnum.Burger]: {
    Path: BurgurIcon,
    viewBox: '24 24',
  },
  [IconsEnum.Geo]: {
    Path: GeoIcon,
    viewBox: '18 18',
  },
  [IconsEnum.User]: {
    Path: UserIcon,
    viewBox: '14 16',
  },
  [IconsEnum.Tag]: {
    Path: TagIcon,
    viewBox: '12 16',
  },
  [IconsEnum.Basket]: {
    Path: BasketIcon,
    viewBox: '18 18',
  },
  [IconsEnum.ArrowLeft]: {
    Path: ArrowLeftIcon,
    viewBox: '16 16',
  },
  [IconsEnum.Sort]: {
    Path: SortIcon,
    viewBox: '14 14',
  },
  [IconsEnum.ArrowDown]: {
    Path: ArrowDownIcon,
    viewBox: '12 8',
  },
  [IconsEnum.Plus]: {
    Path: PlusIcon,
    viewBox: '12 12',
  },
  [IconsEnum.Car]: {
    Path: CarIcon,
    viewBox: '20 20',
  },
  [IconsEnum.ArrowTopRight]: {
    Path: ArrowTopRightIcon,
    viewBox: '13 13',
  },
  [IconsEnum.Check]: {
    Path: CheckIcon,
    viewBox: '12 10',
  },
  [IconsEnum.Visible]: {
    Path: VisibleIcon,
    viewBox: '18 18',
  },
  [IconsEnum.Invisible]: {
    Path: InvisibleIcon,
    viewBox: '18 18',
  },
  [IconsEnum.Post]: {
    Path: PostIcon,
    viewBox: '18 18',
  },
  [IconsEnum.Success]: {
    Path: SuccessIcon,
    viewBox: '20 20',
  },
  [IconsEnum.Warning]: {
    Path: WarningIcon,
    viewBox: '21 22',
  },
  [IconsEnum.Error]: {
    Path: ErrorIcon,
    viewBox: '19 20',
  },
  [IconsEnum.Info]: {
    Path: InfoIcon,
    viewBox: '21 22',
  },
  [IconsEnum.Mines]: {
    Path: MinesIcon,
    viewBox: '20 20',
  },
  [IconsEnum.Night]: {
    Path: NightIcon,
    viewBox: '24 24',
  },

  [IconsEnum.Filters]: {
    Path: FiltersIcon,
    viewBox: '18 18',
  },
  [IconsEnum.Dots]: {
    Path: DotsIcon,
    viewBox: '16 16',
  },
  [IconsEnum.Like]: {
    Path: LikeIcon,
    viewBox: '16 17',
  },
  [IconsEnum.Comment]: {
    Path: CommentIcon,
    viewBox: '16 17',
  },
  [IconsEnum.Share]: {
    Path: ShareIcon,
    viewBox: '16 17',
  },
}

const sizeMapping = {
  [SizesEnum.S]: 12,
  [SizesEnum.M]: 16,
  [SizesEnum.L]: 20,
}

export const Icon = (props: IconProps) => {
  const { icon, size = SizesEnum.M, color = ColorsEnum.Black, className, style } = props

  if (!icon) return <></>

  const pathData = mapping[icon]

  if (!pathData) return <> </>

  const { Path, viewBox } = pathData

  const height = sizeMapping[size]

  return (
    <svg
      viewBox={`0 0 ${viewBox}`}
      style={{
        height: height,
        minHeight: height,
        shapeRendering: 'geometricPrecision',
        ...style,
      }}
      xmlns='http://www.w3.org/2000/svg'
      fill={'transparent'}
      color={color}
      className={className}
    >
      {Path}
    </svg>
  )
}
