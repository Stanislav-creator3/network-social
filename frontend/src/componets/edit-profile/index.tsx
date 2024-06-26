import type { FC} from "react";
import React, { useContext, useState } from "react"
import type { TUser } from "../../app/types"
import { ThemeContext } from "../theme-provider"
import { useUpdateUserMutation } from "../../app/services/userApi"
import { useParams } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { Modal, ModalBody, ModalContent, ModalHeader, Textarea } from "@nextui-org/react"
import Input from "../input"
import { MdOutlineEmail } from "react-icons/md"

type TProps = {
  isOpen: boolean
  onClose: () => void
  user?: TUser
}

const EditProfile: FC<TProps> = ({ isOpen, onClose, user }) => {
  const { theme } = useContext(ThemeContext)
  const [updateUser, { isLoading }] = useUpdateUserMutation()
  const [error, setError] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { id } = useParams<{ id: string }>()
  const { handleSubmit, control } = useForm<TUser>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: user?.email,
      name: user?.name,
      dateOfBirth: user?.dateOfBirth,
      bio: user?.bio,
      location: user?.location,
    },
  })
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={`${theme} text-foreground`}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Изменение профиля
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-4">
                <Input
                  control={control}
                  name="email"
                  label="email"
                  type="email"
                  endContent={<MdOutlineEmail />}
                />
                <Input control={control} name="name" label="Имя" type="text" />
                <input
                  type="file"
                  name="avatarUrl"
                  placeholder="Выберете файл"
                />
                <Input
                  control={control}
                  name="dateOfBirth"
                  label="Дата рождения"
                  type="date"
                  placeholder="Дата рождения"
                />
           <Controller
                  control={control}
                  name="bio"
                 render={({field}) =>(
                    <Textarea {...field} rows={4} placeholder="Расскажите о себе😀"/>
                 )}/>
           <Input
                  control={control}
                  name="location"
                  label="Местоположение"
                  type="text"
                  placeholder="Местоположение"
                />
              </form>
            
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default EditProfile
