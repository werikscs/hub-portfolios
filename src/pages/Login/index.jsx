import Button from "../../components/Button";
import InputText from "../../components/InputText";
import LogoKenzie from "../../components/LogoKenzie";
import * as S from "./styles";

const Login = () => {
  return (
    <S.Section>
      <LogoKenzie />

      <S.Div>
        <h2>Login</h2>

        <InputText label="Email" type="text" placeholder="Email" />

        <InputText label="Senha" type="text" placeholder="Senha" />

        <Button text="Entrar" />

        <span>Ainda não possui uma conta?</span>

        <Button text="Cadastre-se" colorType="disabled" />
      </S.Div>
    </S.Section>
  );
};

export default Login;
