import React from "react";
import { CardContent } from "@mui/material";

function CardContentAtom({ children, sx = {} }) {
  return (
    <CardContent sx={{ p: 0, mt: 1, ...sx }}>
      {children}
    </CardContent>
  );
}

export default CardContentAtom;
