import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import LogoKenzie from "../../components/LogoKenzie";
import SelectInput from "../../components/SelectInput";
import * as S from "./styles";

const Register = () => {
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

      <S.Div>
        <h2>Crie sua conta</h2>

        <span>Rápido e grátis, vamos nessa</span>

        <InputText label="Nome" placeholder="Digite seu nome" />

        <InputText label="Email" placeholder="Digite seu email" />

        <InputPassword label="Senha" placeholder="Digite sua senha" />

        <InputPassword
          label="Confirmar Senha"
          placeholder="Digite a senha novamente"
        />

        <SelectInput
          label="Selecionar módulo"
          options={["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo"]}
        />

        <Button text="Cadastrar" colorType="negative" />
      </S.Div>
    </S.Section>
  );
};

export default Register;
