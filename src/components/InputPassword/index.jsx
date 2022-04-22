import { useState } from "react";
import * as S from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputPassword = () => {
  const [icon, setIcon] = useState(AiFillEye);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setIcon(showPassword ? AiFillEye : AiFillEyeInvisible);
  };

  return (
    <S.Div>
      <label>Password</label>
      <div>
        <input type={showPassword ? "text" : "password"} placeholder="Senha" />
        <button onClick={handleClickShowPassword}>{icon}</button>
      </div>
    </S.Div>
  );
};

export default InputPassword;
