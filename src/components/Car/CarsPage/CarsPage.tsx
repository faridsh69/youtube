'use client'

import { themeStyles } from '@/theme/commonStyles'

import { CarsList } from '../CarList/CarsList'
import styles from './CarsPage.module.scss'

export const CarsPage = () => {
  return (
    <>
      <div className='container'>
        <div className={themeStyles.row}>
          <div className={themeStyles.carLeftColumn}>
            <div className={styles.leftSidebar}></div>
          </div>
          <div className={themeStyles.carCenterColumn}>
            <div className={styles.tabContent}>
              <CarsList />
            </div>
          </div>
          <div className={themeStyles.carRightColumn}>
            <div className={styles.rightSidebar}>Create car button</div>
          </div>
        </div>
      </div>
      <div className={styles.fixedMobileCreatePost}>Create your car</div>
    </>
  )
}
