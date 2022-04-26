import * as S from "./styles";

const ButtonText = ({ text, callback, ...rest }) => {
  return (
    <S.Button onClick={callback} {...rest}>
      {text}
    </S.Button>
  );
};

export default ButtonText;
