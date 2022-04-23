import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import LogoKenzie from "../../components/LogoKenzie";
import * as S from "./styles";

const Register = () => {
  return (
    <S.Section>
      <section>
        <LogoKenzie />
        <ButtonText text="Voltar" />
      </section>

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

        <Button text="Cadastrar" colorType="negative" />
      </S.Div>
    </S.Section>
  );
};

export default Register;
