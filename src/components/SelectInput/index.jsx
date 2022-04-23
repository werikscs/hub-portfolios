import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import * as S from "./styles";

const SelectInput = ({ label, options }) => {
  const [course, setCourse] = useState(1);

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <S.Div>
      <label>{label}</label>
      <Select
        fullWidth
        value={course}
        onChange={handleChange}
        sx={{
          color: "var(--color-gray-1)",
          bgcolor: "var(--color-gray-2)",
          height: "38px",
          fontSize: "0.8rem",
          cursor: "pointer",
          border: 0,
          outline: 0,
          // ":hover": {
          //   border: 0,
          //   outline: 0,
          // },
          // ":focus": {
          //   color: "var(--color-gray-1)",
          //   bgcolor: "var(--color-gray-2)",
          // },
        }}>
        {options.map((option, i) => {
          return (
            <MenuItem key={i} value={i + 1}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </S.Div>
  );
};

export default SelectInput;
