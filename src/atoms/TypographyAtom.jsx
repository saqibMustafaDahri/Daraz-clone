import { Typography } from "@mui/material";
import React from "react";
function TypographyAtom({sx={},text}){
    return(

<Typography sx={sx} >{text}</Typography>

    );
}
export default TypographyAtom;