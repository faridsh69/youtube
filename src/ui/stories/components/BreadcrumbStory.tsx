import { Breadcrumb } from '@/ui'

import styles from '../UiKit.module.scss'

export const BreadcrumbStory = () => {
  return (
    <div className={styles.story}>
      <h4>12) Breadcrumb</h4>
      <small>Breadcrumb is for showing paths</small>
      <code>{'<Breadcrumb options={[{path: "/activity", label: 1}]}  />'}</code>

      <Breadcrumb
        options={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Cars',
            href: '/cars',
          },
          {
            label: 'Bmw',
            href: '/cars/bmw',
          },
        ]}
      />
    </div>
  )
}
