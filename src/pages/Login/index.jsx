import InputText from "../../components/InputText";
import * as S from "./styles";

const Login = () => {
  return (
    <S.Section>
      <h1>Kenzie Hub</h1>

      <S.Div>
        <h2>Login</h2>

        <InputText label="Email" type="text" placeholder="Email" />

        <InputText label="Senha" type="text" placeholder="Senha" />

        <button>Entrar</button>

        <span>Ainda não possui uma conta?</span>

        <button>Cadastre-se</button>
      </S.Div>
    </S.Section>
  );
};

export default Login;
