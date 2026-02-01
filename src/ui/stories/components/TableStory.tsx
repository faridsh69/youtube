import { Table } from '@/ui/components/Table/Table'
import { TableCellComponents, TableSeparators } from '@/ui/components/Table/Table.enums'
import { TableColumn } from '@/ui/components/Table/Table.types'
import { ColorsEnum, IconsEnum } from '@/ui/enums/enums'

import styles from '../UiKit.module.scss'

export const TableStory = () => {
  const columnIds = {
    responsible: 'responsible',
    customer: 'customer',
    risk: 'risk',
    employee: 'employee',
    total_amount: 'total amount',
    documents: 'documents',
    due_date: 'due date',
    projects: 'projects',
    contracts: 'contracts',
    view: 'view',
    edit: 'edit',
    delete: 'delete',
    customAction: 'customAction',
    more: 'more',
    call: 'call',
    mail: 'mail',
  }

  const TABLE_COLUMNS: TableColumn[] = [
    {
      id: columnIds.customer,
      label: 'customer',
      component: TableCellComponents.Title,
      isPrimary: true,
      isSortable: true,
      widthConstraints: {
        min: '150px',
        max: '200px',
      },
    },
    {
      id: columnIds.employee,
      label: 'employee',
      component: TableCellComponents.Count,
      separator: TableSeparators.halfLine,
    },
    {
      id: columnIds.total_amount,
      label: 'total amount',
      component: TableCellComponents.Price,
      separator: TableSeparators.halfLine,
      widthConstraints: {
        min: '150px',
        max: '200px',
      },
    },
    {
      id: columnIds.due_date,
      label: 'due date',
      component: TableCellComponents.Date,
      separator: TableSeparators.halfLine,
    },
    {
      id: columnIds.documents,
      label: 'documents',
      component: TableCellComponents.File,
      separator: TableSeparators.halfLine,
      widthConstraints: {
        min: 100,
        max: 120,
      },
    },
    {
      id: columnIds.projects,
      label: 'projects',
      component: TableCellComponents.Chips,
      separator: TableSeparators.halfLine,
    },

    {
      id: columnIds.view,
      component: TableCellComponents.ViewAction,
    },
    {
      id: columnIds.edit,
      component: TableCellComponents.EditAction,
    },
    {
      id: columnIds.delete,
      component: TableCellComponents.DeleteAction,
    },
    {
      id: columnIds.more,
      component: TableCellComponents.MoreAction,
    },
  ]

  const TABLE_CELLS = [
    {
      columnId: columnIds.customer,
      props: {
        label: 'ProKasro MEchatronic GMBH',
        subLabel: 123456,
        color: ColorsEnum.PrimaryMain,
      },
    },
    {
      columnId: columnIds.risk,
      props: {
        label: 'Medium',
        colorEnum: ColorsEnum.Error,
      },
    },
    {
      columnId: columnIds.employee,
      props: {
        label: 89,
        subLabel: 'employees',
        bold: true,
      },
    },
    {
      columnId: columnIds.total_amount,
      props: {
        label: 30000,
      },
    },
    {
      columnId: columnIds.due_date,
      props: {
        label: '2025-03-12',
        showDateDiff: true,
        showDate: false,
        icon: null,
      },
    },
    {
      columnId: columnIds.documents,
      props: {
        documents: [
          {
            name: 'filename.pdf filename.pdf filename.pdf filename.pdf filename.pdf filename.pdf',
            type: 'pdf',
          },
        ],
      },
    },
    {
      columnId: columnIds.projects,
      props: {
        chips: [
          {
            label: 'Project Name 1',
          },
          {
            label: 'Project Name 2',
          },
        ],
      },
    },
    {
      columnId: columnIds.responsible,
      props: {
        label: 'Johnx Doe',
        subLabel: 'Frontend',
        // avatar: '',
        avatar: 'https://dh5od79hpom3m.cloudfront.net/avatars/avatarCat.png',
      },
    },

    // {
    //   columnId: columnIds.contracts,
    //   props: {
    //     children: <div style={{ background: 'red', width: '600px', height: '90px' }}>SAMPLE</div>,
    //   },
    // },
    {
      columnId: columnIds.view,
      props: {
        onClick: () => alert('View Clicked!'),
      },
    },
    {
      columnId: columnIds.edit,
      props: {
        onClick: () => alert('Edit Clicked!'),
      },
    },
    {
      columnId: columnIds.delete,
      props: {
        onClick: () => alert('Delete Clicked!'),
      },
    },
    {
      columnId: columnIds.customAction,
      props: {
        onClick: () => alert('Custom Action Clicked!'),
        iconColor: ColorsEnum.PrimaryMain,
      },
    },
    {
      columnId: columnIds.more,
      props: {
        options: [
          {
            label: 'download',
            icon: IconsEnum.View,
            onClick: () => alert('download'),
          },
          {
            label: 'forward',
            icon: IconsEnum.View,
            onClick: () => alert('forward'),
          },
        ],
      },
    },
  ]

  return (
    <div className={styles.story}>
      <h4>25) Table</h4>
      <Table
        columns={TABLE_COLUMNS}
        rows={[
          {
            id: 1,
            cells: TABLE_CELLS,
          },
          {
            id: 2,
            cells: TABLE_CELLS,
          },
          {
            id: 3,
            cells: TABLE_CELLS,
          },
        ]}
        height={400}
        // insideForm
        // isLoading={true} // @TODO
        // prefixCell={{
        //   show: true,
        //   width: 6,
        // }}
      />
    </div>
  )
}
