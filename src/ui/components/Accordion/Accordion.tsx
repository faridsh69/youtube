'use client'

import { useEffect, useState } from 'react'

import { IconsEnum, SizesEnum, VariantsEnum } from '../../enums/enums'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import type { AccordionProps } from './Accordion.types'
import styles from './Accordion.module.scss'

export const Accordion = (props: AccordionProps) => {
  const { title, content, isExpanded: propsIsExpanded = false, onExpand } = props

  const [isExpanded, setIsExpanded] = useState(propsIsExpanded)

  useEffect(() => {
    setIsExpanded(propsIsExpanded)
  }, [propsIsExpanded])

  const toggleAccordion = () => {
    setIsExpanded(p => !p)
    onExpand?.(!isExpanded)
  }

  return (
    <div className={styles.accordion}>
      <div
        className={styles.header}
        onClick={toggleAccordion}
        data-testid='accordion-header'
        aria-expanded={isExpanded}
      >
        <Label label={title} cursorPointer />
        <Button
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          iconLeft={isExpanded ? IconsEnum.Mines : IconsEnum.Plus}
          data-testid='accordion-toggle-btn'
        />
      </div>
      {isExpanded && (
        <div className={styles.content} data-testid='accordion-content'>
          {content}
        </div>
      )}
    </div>
  )
}
