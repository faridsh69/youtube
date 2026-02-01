import { useAtom } from 'jotai'

import { SizesEnum, VariantsEnum } from '../../enums/enums'
import { downloadImage } from '../../helpers/ui.helpers'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import { DEFAULT_IMAGE_MODAL, imageModalAtom } from './imageModalAtom'
import styles from './ImageModal.module.scss'

export const ImageModal = () => {
  const [imageModal, setImageModal] = useAtom(imageModalAtom)
  const { src, alt } = imageModal

  return (
    <Modal
      bodyPadding
      setIsOpen={() => setImageModal(DEFAULT_IMAGE_MODAL)}
      closeOnClickOutside={true}
      variant={VariantsEnum.Secondary}
      body={<img src={src} alt={alt} className={styles.imageModal} />}
      title={
        <div className={styles.actions}>
          <Button
            label={`Download`}
            variant={VariantsEnum.Text}
            size={SizesEnum.S}
            onClick={() => downloadImage(src, alt)}
          />
        </div>
      }
    />
  )
}
