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

      <S.Div>
        <h2>Olá, Samuel Leão</h2>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </S.Div>

      <hr />

      <Header>
        <h3>Tecnologias</h3>
        <ButtonText text="+" fontSize="1rem" />
      </Header>

      <S.Ul>
        <li>
          <h4>React JS</h4>
          <span>Intermediário</span>
        </li>

        <li>
          <h4>Next JS</h4>
          <span>Iniciante</span>
        </li>

        <li>
          <h4>Material UI</h4>
          <span>Avançado</span>
        </li>

        <li>
          <h4>Styled-Components</h4>
          <span>Intermediário</span>
        </li>

        <li>
          <h4>Chakra UI</h4>
          <span>Iniciante</span>
        </li>
      </S.Ul>
    </S.Section>
  );
};

export default Dashboard;
