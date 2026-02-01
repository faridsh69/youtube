'use client'

import { FontsEnum, Label } from '@/ui'
import { ButtonLink } from '@/ui/components/ButtonLink/ButtonLink'
import { PAGE_PATHS } from '@/utils/navigate/navigation.constants'
import { useChangePath } from '@/utils/navigate/useChangePath'

export const HomePage = () => {
  const { navigate } = useChangePath()

  return (
    <>
      <Label label='Start your project development.' font={FontsEnum.Label24} />
      {Object.values(PAGE_PATHS).map(href => (
        <div key={href} onClick={() => navigate(href)}>
          <ButtonLink href={href} label={href} />
        </div>
      ))}
    </>
  )
}
