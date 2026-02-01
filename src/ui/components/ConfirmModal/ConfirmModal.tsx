import { useAtom } from 'jotai'

import { FontsEnum, IconsEnum, SizesEnum, TextAlignEnum, VariantsEnum } from '../../enums/enums'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { Modal } from '../Modal/Modal'
import { confirmModalAtom } from './confirmModalAtom'
import styles from './ConfirmModal.module.scss'

export const ConfirmModal = () => {
  const [{ label, subLabel, onConfirm, onCancel, isOpen }] = useAtom(confirmModalAtom)

  const handleCloseModal = () => {
    onCancel?.()
  }

  const onConfirmClick = () => {
    onConfirm?.()
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleCloseModal}
      variant={VariantsEnum.Secondary}
      body={
        <div className={styles.body}>
          <Label label={label} font={FontsEnum.Header28} linesCount={3} />
          <Label
            label={subLabel}
            font={FontsEnum.Text16}
            linesCount={3}
            textAlign={TextAlignEnum.Center}
          />
        </div>
      }
      actions={
        <div className={styles.actions}>
          <Button
            label={'Cancel'}
            iconLeft={IconsEnum.Close}
            onClick={handleCloseModal}
            variant={VariantsEnum.Secondary}
            size={SizesEnum.M}
          />
          <Button
            label={'Confirm'}
            iconLeft={IconsEnum.Check}
            onClick={onConfirmClick}
            variant={VariantsEnum.Primary}
            size={SizesEnum.M}
          />
        </div>
      }
    />
  )
}
