'use client'

import { themeStyles } from '@/theme/themeStyles'

import { CarsList } from '../CarList/CarsList'
import styles from './CarsPage.module.scss'

export const CarsPage = () => {
  return (
    <>
      <div className='container'>
        <div className={themeStyles.row}>
          <div className={themeStyles.discourseLeftColumn}>
            <div className={styles.leftSidebar}></div>
          </div>
          <div className={themeStyles.discourseCenterColumn}>
            <div className={styles.tabContent}>
              <CarsList />
            </div>
          </div>
          <div className={themeStyles.discourseRightColumn}>
            <div className={styles.rightSidebar}>Create car button</div>
          </div>
        </div>
      </div>
      <div className={styles.fixedMobileCreatePost}>Create your car</div>
    </>
  )
}
