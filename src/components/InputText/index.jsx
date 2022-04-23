import SpanError from "../SpanError";
import * as S from "./styles";

const InputText = ({ label, name, register, error = "", ...rest }) => {
  return (
    <S.Div>
      <label>{label}</label>
      <div>
        <input {...register(name)} {...rest} />
      </div>
      {error && <SpanError message={error} />}
    </S.Div>
  );
};

export default InputText;
