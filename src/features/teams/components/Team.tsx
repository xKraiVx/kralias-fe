import { Autorenew, Clear } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { JSX } from "react";

interface ITeamProps {
  name: string;
  onUpdate?: (name: string) => void;
  onRemove?: (name: string) => void;
}

export default function Team({
  name,
  onUpdate,
  onRemove,
}: ITeamProps): JSX.Element {
  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(name);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(name);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        pl: { md: 10, xs: 2 },
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          flex: 2,
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
        <Button
          color="primary"
          sx={{
            height: 100,
            flex: 1,
            minWidth: { md: 100, xs: 50 },
          }}
          onClick={handleUpdate}
        >
          <Autorenew />
        </Button>
        <Button
          color="primary"
          sx={{
            height: 100,
            flex: 1,
            minWidth: { md: 100, xs: 50 },
          }}
          onClick={handleRemove}
        >
          <Clear />
        </Button>
      </Box>
    </Box>
  );
}
