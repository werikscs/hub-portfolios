import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import LogoKenzie from "../../components/LogoKenzie";
import * as S from "./styles";

const Dashboard = () => {
  return (
    <S.Section>
      <Header>
        <LogoKenzie />
        <ButtonText text="Sair" />
      </Header>

      <hr />

      <div>
        <h2>Olá, Samuel Leão</h2>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </div>

      <hr />

      <Header>
        <h3>Tecnologias</h3>
        <ButtonText text="+" />
      </Header>
    </S.Section>
  );
};

export default Dashboard;
