import { useCrudCarsList } from '@/apis/useCruds/adminCruds'
import { Button, Form, InputComponentsEnum, Modal, SizesEnum, VariantsEnum } from '@/ui'
import { useAtom } from 'jotai'

import { carFormModalAtom, DEFAULT_CAR_FORM_MODAL } from './carFormModalAtom'

export const CarFormModal = () => {
  const [carModal, setCarModal] = useAtom(carFormModalAtom)

  const setFormValues = (formData: any) => {
    setCarModal((p: any) => ({
      ...p,
      ...formData,
    }))
  }

  const handleCloseModal = () => {
    setCarModal(DEFAULT_CAR_FORM_MODAL)
  }

  const { createMutation, updateMutation } = useCrudCarsList()

  const handleCreatePost = () => {
    if (carModal.id) {
      updateMutation.mutate({
        data: carModal,
        onSuccess: () => {
          handleCloseModal()
        },
      })
    }

    createMutation.mutate({
      data: {
        ...carModal,
        id: undefined,
      },
      onSuccess: () => {
        handleCloseModal()
      },
    })
  }

  return (
    <Modal
      bodyPadding
      width={'720px'}
      setIsOpen={handleCloseModal}
      closeOnClickOutside={false}
      title='New post'
      variant={VariantsEnum.Secondary}
      body={
        <div>
          <Form
            values={carModal}
            onChangeInput={setFormValues}
            inputs={[
              {
                name: 'title',
                label: 'Headline',
                component: InputComponentsEnum.Text,
                placeholder: 'Name of the car',
                minLength: 25,
              },
              {
                name: 'description',
                label: 'Description',
                component: InputComponentsEnum.Textarea,
                rows: 5,
                placeholder: 'Explain car details',
                minLength: 25,
              },
              {
                name: 'year',
                label: 'Year',
                component: InputComponentsEnum.Select,
                multiple: false,
                options: [
                  {
                    label: '2020',
                    value: 2020,
                  },
                ],
              },
              {
                name: 'Cleanliness',
                label: 'Rate this car cleanliness',
                component: InputComponentsEnum.Rating,
                size: SizesEnum.L,
              },
              {
                name: 'imageUrls',
                label: 'Upload a photo of the car',
                component: InputComponentsEnum.Uploader,
              },
            ]}
          />
        </div>
      }
      actions={
        <div>
          <Button
            label='Submit'
            variant={VariantsEnum.Primary}
            onClick={handleCreatePost}
            disabled={createMutation.isPending || updateMutation.isPending}
          />
        </div>
      }
    />
  )
}
