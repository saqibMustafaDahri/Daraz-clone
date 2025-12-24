import { Toolbar } from "@mui/material";
import React from "react";
function ToolbarAtom({sx={},children}){
    return(
<Toolbar sx={sx}>{children}</Toolbar>
    );
}
export default ToolbarAtom;