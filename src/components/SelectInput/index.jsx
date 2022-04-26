import { Select, MenuItem } from "@mui/material";
import * as S from "./styles";

const SelectInput = ({ label, options, select, setSelect }) => {
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <S.Div>
      <label>{label}</label>
      <Select
        fullWidth
        value={select}
        onChange={handleChange}
        sx={{
          color: "var(--color-gray-1)",
          bgcolor: "var(--color-gray-2)",
          height: "38px",
          fontSize: "0.8rem",
          cursor: "pointer",
          border: 0,
          outline: 0,
        }}>
        {options.map((option, i) => {
          return (
            <MenuItem key={i} value={i}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </S.Div>
  );
};

export default SelectInput;
