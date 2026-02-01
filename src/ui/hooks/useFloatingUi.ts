import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
  type Placement,
} from '@floating-ui/react'

import { PlacementsEnum } from '../enums/enums'

export const useFloatingUi = (
  propPlacement: Placement = PlacementsEnum.BottomEnd,
  padding: number,
) => {
  return useFloating({
    placement: propPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(padding),
      flip(),
      shift({ padding }),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })
}
