import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import LogoKenzie from "../../components/LogoKenzie";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";
import { useState } from "react";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "As senhas são diferentes!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (dataForm) => {
    console.log(errors);
    console.log(dataForm, options[select]);
  };

  const options = ["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo"];

  const [select, setSelect] = useState(0);

  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };

  return (
    <S.Section>
      <Header>
        <LogoKenzie />
        <ButtonText text="Voltar" callback={goToLogin} />
      </Header>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>

        <span className="register-msg">Rápido e grátis, vamos nessa</span>

        <InputText
          label="Nome"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Digite seu nome"
        />

        <InputText
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="Digite seu email"
        />

        <InputPassword
          label="Senha"
          name="password"
          register={register}
          error={errors.password?.message}
          placeholder="Digite sua senha"
        />

        <InputPassword
          label="Confirmar Senha"
          name="passwordConfirm"
          register={register}
          error={errors.passwordConfirm?.message}
          placeholder="Digite a senha novamente"
        />

        <SelectInput
          label="Selecionar módulo"
          options={options}
          select={select}
          setSelect={setSelect}
        />

        <Button text="Cadastrar" colorType="negative" />
      </S.Form>
    </S.Section>
  );
};

export default Register;
