import { CardMedia } from "@mui/material";
import React from "react";

function CardMediaAtom({ image, sx = {} }) {
  return (
    <CardMedia
      component="img"
      image={image}
      sx={{ height: 150, objectFit: "cover", borderRadius: 1, ...sx }}
    />
  );
}

export default CardMediaAtom;
