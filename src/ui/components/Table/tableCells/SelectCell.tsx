import { PlacementsEnum } from '@/ui/enums/enums'

import { Select } from '../../Select/Select'
import { SelectTriggerComponents } from '../../Select/Select.enums'
import { SelectCellProps } from '../Table.types'

export const SelectCell = (props: SelectCellProps) => {
  const { selectProps } = props

  if (!selectProps) return <div> add selectProps in cell</div>

  return (
    <div>
      <Select
        width='150px'
        placement={PlacementsEnum.BottomEnd}
        trigger={{
          component: SelectTriggerComponents.Input,
          props: { readOnly: true, withHandle: false },
        }}
        {...selectProps}
      />
    </div>
  )
}
