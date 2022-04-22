import * as S from "./styles";

const InputText = ({ label, ...rest }) => {
  return (
    <S.Div>
      <label>{label}</label>
      <div>
        <input {...rest} />
      </div>
    </S.Div>
  );
};

export default InputText;
