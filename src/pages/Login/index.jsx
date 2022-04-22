import * as S from "./styles";

const Login = () => {
  return (
    <S.Section>
      <h1>Kenzie Hub</h1>

      <S.Div>
        <h2>Login</h2>

        <div>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" placeholder="Senha" />
        </div>

        <button>Entrar</button>

        <span>Ainda não possui uma conta?</span>

        <button>Cadastre-se</button>
      </S.Div>
    </S.Section>
  );
};

export default Login;
