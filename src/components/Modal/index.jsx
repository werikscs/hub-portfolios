import Button from "../Button";
import InputText from "../InputText";
import SelectInput from "../SelectInput";

import * as S from "./styles";

const Modal = ({
  text,
  inputText,
  inputSelect,
  inputTextPlaceholder,
  buttons,
  options,
}) => {
  return (
    <S.Section>
      <div>
        <h4>{text}</h4>
        <span>X</span>
      </div>
      <section>
        <InputText label={inputText} placeholder={inputTextPlaceholder} />
        <SelectInput label={inputSelect} options={options} />
      </section>
      <div className="btns">
        {buttons.map((button, i) => {
          return (
            <Button
              key={i}
              text={button.text}
              colorType={button?.colorType}
              width={button.width}
            />
          );
        })}
      </div>
    </S.Section>
  );
};

export default Modal;
