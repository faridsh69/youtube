'use client'

import { authModalAtom } from '@/auth/atoms/authModalAtom'
import { LoginModal } from '@/auth/components/LoginModal/LoginModal'
import { ConfirmModal } from '@/ui/components/ConfirmModal/ConfirmModal'
import { confirmModalAtom } from '@/ui/components/ConfirmModal/confirmModalAtom'
import { ImageModal } from '@/ui/components/ImageModal/ImageModal'
import { imageModalAtom } from '@/ui/components/ImageModal/imageModalAtom'
import { ShareModal } from '@/ui/components/ShareModal/ShareModal'
import { shareModalAtom } from '@/ui/components/ShareModal/shareModalAtom'
import { useAtom } from 'jotai'

import { CarFormModal } from '../Car/CarFormModal/CarFormModal'
import { carFormModalAtom } from '../Car/CarFormModal/carFormModalAtom'

export const Portals = () => {
  const [{ isOpen: isLoginModalOpen }] = useAtom(authModalAtom)
  const [{ isOpen: isImageModalOpen }] = useAtom(imageModalAtom)
  const [{ isOpen: isConfirmModalOpen }] = useAtom(confirmModalAtom)
  const [{ isOpen: iscarModalOpen }] = useAtom(carFormModalAtom)
  const [{ isOpen: isShareModalOpen }] = useAtom(shareModalAtom)

  return (
    <>
      {isLoginModalOpen && <LoginModal />}
      {isImageModalOpen && <ImageModal />}
      {isConfirmModalOpen && <ConfirmModal />}
      {iscarModalOpen && <CarFormModal />}
      {isShareModalOpen && <ShareModal />}
    </>
  )
}
