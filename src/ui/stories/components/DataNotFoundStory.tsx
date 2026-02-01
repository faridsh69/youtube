import { useState } from 'react'
import { Button, DataNotFound } from '@/ui'

import styles from '../UiKit.module.scss'

export const DataNotFoundStory = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.story}>
      <h4>19) DataNotFound </h4>
      <small>It will show after search data is not found</small>

      <Button label='start searching' onClick={handleSearch} />
      <div style={{ width: 160 }}>
        <DataNotFound isLoading={isLoading} label='Items not found.' />
      </div>
    </div>
  )
}
