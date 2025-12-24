import { Card } from "@mui/material";
import React from "react";
function CardAtom({sx={},children}){
    return(
<Card sx={sx}>{children}</Card>
    );
}
export default CardAtom;