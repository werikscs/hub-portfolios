import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Button from "../Button";
import InputText from "../InputText";
import SelectInput from "../SelectInput";

import * as S from "./styles";

const Modal = ({
  setDataModal,
  closeModal,
  text,
  inputText,
  inputSelect,
  inputTextPlaceholder,
  buttons,
  options,
  valueText = "",
  initialSelect = 0,
}) => {
  const schema = yup.object().shape({
    text: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ text }) => {
    setDataModal({ title: text, status: options[select] });
    closeModal();
  };

  const [select, setSelect] = useState(initialSelect);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4>{text}</h4>
        <span onClick={closeModal}>X</span>
      </div>
      <section>
        {valueText ? (
          <InputText
            label={inputText}
            placeholder={inputTextPlaceholder}
            name="text"
            value={valueText}
            register={register}
            error={errors.text?.message}
          />
        ) : (
          <InputText
            label={inputText}
            placeholder={inputTextPlaceholder}
            name="text"
            register={register}
            error={errors.text?.message}
          />
        )}
        <SelectInput
          label={inputSelect}
          options={options}
          select={select}
          setSelect={setSelect}
        />
      </section>
      <div className="btns">
        {buttons.map((button, i) => {
          return (
            <Button
              key={i}
              text={button.text}
              colorType={button?.colorType}
              width={button.width}
              callback={button.callback}
              type={button.type}
            />
          );
        })}
      </div>
    </S.Form>
  );
};

export default Modal;
