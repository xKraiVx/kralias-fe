import UiNumberTextfield from "@/common/ui/ui-number-textfield/UiNumberTextfield";
import { Stack } from "@mui/material";
import { JSX } from "react";

export default function RulesList(): JSX.Element {
  return (
    <Stack gap={2}>
      <UiNumberTextfield label="Duration" />
      <UiNumberTextfield label="Words to win" />
    </Stack>
  );
}
