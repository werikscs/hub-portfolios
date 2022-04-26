import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import SpanError from "../SpanError";

import * as S from "./styles";

const InputPassword = ({ label, name, register, error = "", ...rest }) => {
  const [icon, setIcon] = useState(AiFillEye);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setIcon(showPassword ? AiFillEye : AiFillEyeInvisible);
  };

  return (
    <S.Div>
      <label>{label}</label>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          {...register(name)}
          {...rest}
        />
        <button onClick={handleClickShowPassword}>{icon}</button>
      </div>
      {error && <SpanError message={error} />}
    </S.Div>
  );
};

export default InputPassword;
