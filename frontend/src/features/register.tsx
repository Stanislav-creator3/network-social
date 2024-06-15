import type { FC } from "react"
import { useState } from "react"
import Input from "../componets/input"
import { useForm } from "react-hook-form"
import { Button, Link } from "@nextui-org/react"
import { useRegisterMutation } from "../app/services/userApi"
import { useNavigate } from "react-router-dom"
import { hasErrorField } from "../utils/has-error-field"
import ErrorMessage from "../componets/error-message"

type TRegister = {
  email: string
  name: string
  password: string
}

type TProps = {
  setSelected: (value: string) => void
}

const Register: FC<TProps> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TRegister>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })

  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const onSubmit = async (data: TRegister) => {
    try {
      await register(data).unwrap()
      setSelected("login")
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        label="name"
        type="text"
        required="Обязательное поле"
      />
      <Input
        control={control}
        name="email"
        label="email"
        type="email"
        required="Обязательное поле"
      />
      <Input
        control={control}
        name="password"
        label="password"
        type="password"
        required="Обязательное поле"
      />
        <ErrorMessage error={error}/>
      <p className="text-center text-small ">
        Уже есть аккаунт?
        <Link
          size="sm"
          className="cursor-pointer p-1"
          onPress={() => setSelected("login")}
        >
          Войти
        </Link>
      </p>

      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}

export default Register
