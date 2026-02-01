import { toast } from 'react-toastify'

import { ColorsEnum, FontsEnum, IconsEnum, SizesEnum } from '../../enums/enums'
import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import styles from './Toast.module.scss'

export const toastSuccess = ({ title = 'Success', description = '' }) => {
  toast.success(<Toast title={title} description={description} icon={IconsEnum.Success} />)
}

export const toastWarning = ({ title = 'Warning', description = '' }) => {
  toast.warning(<Toast title={title} description={description} icon={IconsEnum.Warning} />)
}

export const toastError = ({ title = 'Error', description = '' }) => {
  toast.error(<Toast title={title} description={description} icon={IconsEnum.Error} />)
}

const Toast = ({ closeToast, title, description, icon }: any) => {
  return (
    <div className={styles.toast}>
      <div className={styles.header}>
        <div className={styles.check}>
          <Icon icon={icon} size={SizesEnum.L} />
        </div>
        <div className={styles.title}>
          <Label label={title} font={FontsEnum.Label16} color={ColorsEnum.Black} linesCount={2} />
        </div>
        <div className={styles.close} onClick={closeToast}>
          <Icon
            icon={IconsEnum.Close}
            size={SizesEnum.S}
            color={ColorsEnum.Black}
            className={styles.close}
          />
        </div>
      </div>
      <Label label={description} font={FontsEnum.Text14} color={ColorsEnum.Black} linesCount={2} />
    </div>
  )
}
