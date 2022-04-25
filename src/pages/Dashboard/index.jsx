import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import LogoKenzie from "../../components/LogoKenzie";
import Modal from "../../components/Modal";

import api from "../../services/api";

import * as S from "./styles";

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  const [dataAPI, setDataAPI] = useState(null);
  const [selectRegister] = useState();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [userId] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user-id"))
  );

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const [dataModal, setDataModal] = useState({});
  const [dataLI, setDataLI] = useState({});

  const showModalEditFunction = () => {
    setShowModalEdit(!showModalEdit);
  };

  const showModalRegisterFunction = () => {
    setShowModalRegister(!showModalRegister);
  };

  const history = useHistory();

  const exitDashboard = () => {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:user-id");

    setIsAuthenticated(false);

    return history.push("/");
  };

  const loadDataAPI = () => {
    api
      .get(`/users/${userId}`)
      .then((res) => setDataAPI(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadDataAPI();
  }, []);

  useEffect(() => {
    if (Object.values(dataModal).length !== 0) {
      api
        .post("/users/techs", dataModal, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => loadDataAPI())
        .then((res) => setDataModal({}));
    }
  }, [dataModal]);

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <S.Section>
      {showModalRegister && (
        <Modal
          closeModal={showModalRegisterFunction}
          setDataModal={setDataModal}
          text="Cadastrar Tecnologia"
          inputText="Nome"
          inputTextPlaceholder="Nome da Tecnologia"
          inputSelect="Selecionar Status"
          options={["Primeiro Módudo", "Segundo Módulo", "Terceiro Módulo"]}
          buttons={[{ text: "Cadastrar Tecnologia" }]}
        />
      )}

      {showModalEdit && (
        <Modal
          closeModal={showModalEditFunction}
          text="Detalhes da Tecnologia"
          inputText="Nome do Projeto"
          inputSelect="Status"
          options={["Iniciante", "Indermediário", "Avançando"]}
          buttons={[
            { text: "Salvar Alterações", colorType: "negative" },
            { text: "Excluir", colorType: "disabled", width: "fit-content" },
          ]}
        />
      )}

      <Header>
        <LogoKenzie />
        <ButtonText text="Sair" callback={exitDashboard} />
      </Header>

      <hr />

      <S.Div>
        <h2>{dataAPI && dataAPI.name}</h2>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </S.Div>

      <hr />

      <Header>
        <h3>Tecnologias</h3>
        <ButtonText
          text="+"
          callback={showModalRegisterFunction}
          fontSize="1rem"
        />
      </Header>

      <S.Ul>
        {dataAPI &&
          dataAPI.techs.map((tech) => {
            return (
              <li
                key={tech.id}
                id={tech.id}
                onClick={() => {
                  setShowModalEdit(true);
                  // setDataLI({
                  //   id: tech.id,
                  //   title: tech.title,
                  //   status: options.findIndex(tech.status),
                  // });
                }}>
                <h4>{tech.title}</h4>
                <span>{tech.status}</span>
              </li>
            );
          })}
      </S.Ul>
    </S.Section>
  );
};

export default Dashboard;
