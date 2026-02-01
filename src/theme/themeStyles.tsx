import { clsx } from 'clsx'

import styles from './theme.module.scss'

const discourseLeftColumn = clsx(
  styles['col-xl-2'],
  styles['col-lg-2'],
  styles['col-md-3'],
  styles['col-sm-0'],
  styles['col-0'],
)

const discourseCenterColumn = clsx(
  styles['col-xl-7'],
  styles['col-lg-7'],
  styles['col-md-9'],
  styles['col-sm-12'],
  styles['col-12'],
)

const discourseRightColumn = clsx(
  styles['col-xl-3'],
  styles['col-lg-3'],
  styles['col-md-12'],
  styles['col-sm-12'],
  styles['col-0'],
)

const halfColumn = clsx(
  styles['col-xl-6'],
  styles['col-lg-6'],
  styles['col-md-6'],
  styles['col-sm-12'],
  styles['col-12'],
)

export const themeStyles = {
  container: styles.container,
  row: styles.row,
  col12: styles['col-12'],
  col8: styles['col-8'],
  col7: styles['col-7'],
  col6: styles['col-6'],
  col5: styles['col-5'],
  col4: styles['col-4'],
  col3: styles['col-3'],
  col2: styles['col-2'],
  halfColumn,
  paginatedList: styles.paginatedList,
  discourseLeftColumn,
  discourseCenterColumn,
  discourseRightColumn,
}
