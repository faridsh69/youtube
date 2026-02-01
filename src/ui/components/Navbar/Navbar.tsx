'use client'

import { useState } from 'react'
import { authAtom } from '@/auth/atoms/authAtom'
import { authModalAtom } from '@/auth/atoms/authModalAtom'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from '@/ui/enums/enums'
import { useClickOutside } from '@/ui/hooks/useClickOutside'
import { PAGE_PATHS } from '@/utils/navigate/navigation.constants'
import { useChangePath } from '@/utils/navigate/useChangePath'
import { useAtom } from 'jotai'

import { Button } from '../Button/Button'
import { NavbarProps } from './Navbar.types'
import styles from './Navbar.module.scss'

export const Navbar = (props: NavbarProps) => {
  const { options } = props

  const { navigate } = useChangePath()

  const [, setAuthModal] = useAtom(authModalAtom)

  const [selectedOption, setSelectedOption] = useState<any>(null)

  const [{ user: authUser }] = useAtom(authAtom)

  const handleLogin = () => {
    if (authUser) {
      return
    }

    setAuthModal(p => ({ ...p, isOpen: true }))
  }

  const handleClickPath = (path: string) => {
    if (path === PAGE_PATHS.home) {
      navigate(path)
      return
    }
  }

  const handleClose = () => {
    setSelectedOption(null)
  }

  // @TODO replace it with a hook to check document on click and close it
  const clickoutsideRef = useClickOutside(handleClose, !!selectedOption)

  return (
    <div className={selectedOption ? styles.overlay : ''}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Button
            variant={VariantsEnum.Text}
            onClick={() => handleClickPath(PAGE_PATHS.home)}
            label='Home'
          />
        </div>
        <div className={styles.options}>
          {options.map((option, index) => (
            <div key={index} className={styles.option} onClick={() => setSelectedOption(option)}>
              <Button label={option.label} variant={VariantsEnum.Text} size={SizesEnum.S} />
            </div>
          ))}
        </div>
        <div className={styles.rightBar}>
          {!authUser?.id ? (
            <Button
              iconLeft={IconsEnum.User}
              variant={VariantsEnum.Text}
              size={SizesEnum.M}
              label='Login'
              onClick={handleLogin}
            />
          ) : (
            <Button
              iconLeft={IconsEnum.User}
              variant={VariantsEnum.Text}
              size={SizesEnum.M}
              label={authUser.username}
              onClick={handleLogin}
            />
          )}
          <Button
            iconLeft={IconsEnum.Tag}
            variant={VariantsEnum.Text}
            size={SizesEnum.M}
            onClick={() => handleClickPath('/flag')}
          />
          <Button
            iconLeft={IconsEnum.Basket}
            variant={VariantsEnum.Text}
            size={SizesEnum.M}
            onClick={() => handleClickPath('/basket')}
          />
        </div>
        {selectedOption && (
          <div className={styles.expanded} ref={clickoutsideRef}>
            <div className={styles.categories}>
              {selectedOption?.categories?.map((category: any) => (
                <div key={category.label} className={styles.category}>
                  <Button
                    label={category.label}
                    variant={VariantsEnum.Text}
                    size={SizesEnum.S}
                    onClick={() => handleClickPath(category.path)}
                    font={FontsEnum.Header14}
                  />
                  {category.options.map((option: any) => (
                    <div className={styles.categoryLink} key={option.label}>
                      <Button
                        label={option.label}
                        variant={VariantsEnum.Text}
                        size={SizesEnum.S}
                        onClick={() => handleClickPath(category.path)}
                        font={FontsEnum.Text14}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
