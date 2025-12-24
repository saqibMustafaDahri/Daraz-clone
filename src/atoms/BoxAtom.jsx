import { Box } from "@mui/material";
import React from "react";
function BoxAtom({ sx = {}, children ,onClick}){
    return(
        <Box sx={sx}onClick={onClick}>
        {children}
      </Box>
    );
}
export default BoxAtom;




