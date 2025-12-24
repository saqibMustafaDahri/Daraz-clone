import { AppBar } from "@mui/material";
import React from "react";
function AppBarAtom({sx={},children}){
    return(
<AppBar sx={sx}>{children}</AppBar>
    );
}
export default AppBarAtom;