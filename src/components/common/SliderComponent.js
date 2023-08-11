import React from "react";

import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

//passing value using props
// export const SliderComponent = (props) => {
//   return (
//     <Slider defaultValue={props.defaultValue} min={props.min} max={props.max} aria-label="Default" valueLabelDisplay="auto" />
//   )
// }

//props destructuring
export const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
  minamount,
  maxamount
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={2}>
        <Typography varient="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit}{amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent={"space-between"}>
      <Typography varient="caption" color="text.secondary">{unit}{min}</Typography>
      <Typography varient="caption" color="text.secondary">{unit}{max}</Typography>
      </Stack>
    </Stack>
  );
};
