import { useState, type FC } from "react"
import { useForm } from "react-hook-form"
import Input from "../componets/input"
import { Button, Link } from "@nextui-org/react"
import { useLazyCurrentQuery, useLoginMutation } from "../app/services/userApi"
import { useNavigate } from "react-router-dom"

type TLogin = {
  email: string
  password: string
}

type TProps = {
  setSelected: (value: string) => void
}

const Login: FC<TProps> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLogin>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [triggerCurrentQuery] = useLazyCurrentQuery()

  const onSubmit = async (data: TLogin) => {
    try {
        await login(data).unwrap()
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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

      <p className="text-center text-small ">
        Нет аккаунта?
        <Link
          size="sm"
          className="cursor-pointer p-1"
          onPress={() => setSelected("sing-up")}
        >
          Зарегистрируйтесь
        </Link>
      </p>

      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Войти
        </Button>
      </div>
    </form>
  )
}

export default Login
