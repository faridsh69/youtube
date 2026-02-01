'use client'

import { AccordionStory } from './components/AccordionStory'
import { AvatarsStory } from './components/AvatarsStory'
import { BreadcrumbStory } from './components/BreadcrumbStory'
import { ButtonStory } from './components/ButtonsStory'
import { CheckListStory } from './components/CheckListStory'
import { ChipStory } from './components/ChipStory'
import { ContextMenuStory } from './components/ContextMenuStory'
import { DataNotFoundStory } from './components/DataNotFoundStory'
import { FileUploaderStory } from './components/FileUploaderStory'
import { FormStory } from './components/FormStory'
import { IconsStory } from './components/IconsStory'
import { ImageStory } from './components/ImageStory'
import { LabelStory } from './components/LabelStory'
import { LoaderStory } from './components/LoaderStory'
import { ModalStory } from './components/ModalStory'
import { RadioListStory } from './components/RadioListStory'
import { RatingStory } from './components/RatingStory'
import { SelectStory } from './components/SelectStory'
import { SkeletonStory } from './components/SkeletonStory'
import { TabItemsStory } from './components/TabItemsStory'
import { TableStory } from './components/TableStory'
import { TextareaStory } from './components/TextareaStory'
import { TextInputStory } from './components/TextInputStory'
import { ToastStory } from './components/ToastStory'
import { ToggleStory } from './components/ToggleStory'
import styles from './UiKit.module.scss'

export const UiKitStory = () => {
  return (
    <div className={styles.story}>
      <h1>DESIGN SYSTEM</h1>

      <IconsStory />

      <LabelStory />
      <ButtonStory />
      <CheckListStory />
      <RadioListStory />
      <TextInputStory />
      <TextareaStory />
      <ModalStory />
      <SelectStory />
      <ContextMenuStory />
      <TabItemsStory />
      <BreadcrumbStory />
      <AvatarsStory />
      <ChipStory />
      <RatingStory />
      <AccordionStory />
      <FileUploaderStory />
      <ToggleStory />
      <DataNotFoundStory />
      <LoaderStory />
      <FormStory />
      <SkeletonStory />
      <ImageStory />
      <ToastStory />
      <TableStory />
    </div>
  )
}
