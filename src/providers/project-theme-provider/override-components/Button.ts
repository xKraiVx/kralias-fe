import { GREY } from "@/providers/project-theme-provider/constants/palette";

export const Button = {
  MuiButton: {
    styleOverrides: {
      root: {
        "&.Mui-focusVisible": {
          boxShadow: "none",
        },
        "&:hover": { boxShadow: "none" },
        "&.Mui-disabled": {
          backgroundColor: GREY[800],
          color: GREY[400],
        },
      },
    },
  },
};
