import * as S from "./styles";

const Button = ({ text, callback, ...rest }) => {
  return (
    <S.Button onClick={callback} {...rest}>
      {text}
    </S.Button>
  );
};

export default Button;
