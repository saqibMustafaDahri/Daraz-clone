import { Button } from "@mui/material";
import React from "react";
function ButtonAtom({ sx={}, text,onClick }) {
  return (
    <Button variant="outlined" sx={sx} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonAtom;
