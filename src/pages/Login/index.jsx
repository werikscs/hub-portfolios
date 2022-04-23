import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import LogoKenzie from "../../components/LogoKenzie";

import * as S from "./styles";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (dataForm) => {
    console.log(dataForm);
  };

  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <S.Section>
      <LogoKenzie />

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <InputText
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="Email"
        />

        <InputPassword
          label="Senha"
          name="password"
          register={register}
          error={errors.password?.message}
          placeholder="Senha"
        />

        <Button text="Entrar" />

        <span className="hasAnAccount">Ainda não possui uma conta?</span>

        <Button
          text="Cadastre-se"
          callback={goToRegister}
          colorType="disabled"
        />
      </S.Form>
    </S.Section>
  );
};

export default Login;
