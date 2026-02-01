import { openUrl } from '@/utils/navigate/navigation.helper'
import { useAtom } from 'jotai'

import { FontsEnum, VariantsEnum } from '../../enums/enums'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { Modal } from '../Modal/Modal'
import { TextInput } from '../TextInput/TextInput'
import { DEFAULT_SHARE_MODAL, shareModalAtom } from './shareModalAtom'
import styles from './ShareModal.module.scss'

export const ShareModal = () => {
  const [shareModal, setShareModal] = useAtom(shareModalAtom)
  const { url } = shareModal

  const copyButtonDisabled = false

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setShareModal(DEFAULT_SHARE_MODAL)
  }

  return (
    <Modal
      bodyPadding
      setIsOpen={() => setShareModal(DEFAULT_SHARE_MODAL)}
      closeOnClickOutside={true}
      variant={VariantsEnum.Secondary}
      width={500}
      body={
        <div className='flex flex-col gap-6 px-0'>
          <Label label='Share it on social' font={FontsEnum.Label18} />

          <div className='flex justify-center gap-6'>
            <Button
              label='facebook'
              onClick={() => openUrl(`https://www.facebook.com/sharer/sharer.php?u=${url}`)}
            />
            <Button
              label='twitter'
              onClick={() => openUrl(`https://twitter.com/intent/tweet?url=${url}`)}
              aria-label=''
            />
            <Button
              label='google'
              onClick={() =>
                openUrl(
                  `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=&body=${url}&ui=2&tf=1&pli=1`,
                )
              }
              aria-label='google'
            />
          </div>

          <label className='text-base text-black'>or, copy link: </label>

          <div className='relative flex flex-col gap-6 md:block'>
            <TextInput value={url} disabled />
            <div className='relative md:absolute right-0 top-0'>
              <Button
                disabled={copyButtonDisabled}
                onClick={handleCopyToClipboard}
                label={copyButtonDisabled ? 'Copied' : `Copy`}
              />
            </div>
          </div>
        </div>
      }
      title={<div className={styles.actions}></div>}
    />
  )
}
