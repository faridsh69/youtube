import { FileUploader } from '@/ui'

import styles from '../UiKit.module.scss'

export const FileUploaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>17) FileUploader</h4>

      <small>We have a file uploader with showing uploaded files</small>
      <code>{'<FileUploader label="Add photo" />'}</code>

      <div
        style={{
          gap: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <FileUploader label='Add photo' max={2} value={[]} onChange={() => {}} />
      </div>
    </div>
  )
}
