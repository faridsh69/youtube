import { FontsEnum } from '@/ui/enums/enums'
import { getTitleCase } from '@/utils/variables/string.helpers'
import Link from 'next/link'

import { Label } from '../Label/Label'
import type { BreadcrumbProps } from './Breadcrumb.types'
import styles from './Breadcrumb.module.scss'

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { options } = props

  return (
    <nav className={styles.breadcrumb}>
      {options.map((option, index) => {
        const isLast = index === options.length - 1

        if (!isLast) {
          return (
            <div key={option.href} className={styles.breadcrumbItem}>
              <Link href={option.href}>
                <Label
                  font={FontsEnum.Label14}
                  key={option.href}
                  label={getTitleCase(option.label)}
                />
              </Link>
              <span>/</span>
            </div>
          )
        }

        return (
          <Label font={FontsEnum.Label16} key={option.href} label={getTitleCase(option.label)} />
        )
      })}
    </nav>
  )
}
