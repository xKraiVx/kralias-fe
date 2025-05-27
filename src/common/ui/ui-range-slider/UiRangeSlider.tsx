"use client";

import { JSX, useEffect, useState } from "react";

import { Slider, SliderProps, Stack, Typography } from "@mui/material";

interface UiUiRangeSliderProps
  extends Omit<SliderProps, "value" | "defaultValue" | "onChange"> {
  defaultValue?: number;
  value?: number;
  label?: string;
  dimension?: string;
  onChange?: (newValue: number) => void;
}

export default function UiRangeSlider({
  sx,
  label,
  defaultValue,
  value,
  dimension,
  onChange,
  ...props
}: UiUiRangeSliderProps): JSX.Element {
  const [currentValue, setCurrentValue] = useState<number>(
    value ?? defaultValue ?? 0
  );

  const handleChange = (newValue: number | number[]): void => {
    if (typeof newValue === "number") {
      setCurrentValue(newValue);
      onChange?.(newValue);
    }
  };

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const valueWithDimension = dimension
    ? `${currentValue} ${dimension}`
    : currentValue;

  return (
    <Stack sx={{ ...sx, gap: 2 }}>
      {label && (
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {label}
          <Typography variant="h3" component="span">
            ({valueWithDimension})
          </Typography>
        </Typography>
      )}
      <Slider
        aria-label={label}
        valueLabelDisplay="auto"
        marks
        onChange={(_, newValue) => handleChange(newValue)}
        defaultValue={defaultValue}
        value={value}
        {...props}
      />
    </Stack>
  );
}
