import React from "react";
import TypographyAtom from "../atoms/TypographyAtom";
import BoxAtom from "../atoms/BoxAtom";
import { Avatar } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function FooterLast(){
    return(
        <BoxAtom sx={{display:"flex",justifyContent:"space-between",px:5,width:"100%"}}>
        <BoxAtom>
<TypographyAtom text="Daraz international"/>
<BoxAtom sx={{display:"flex"}}>
<Avatar src="/pakistan.jpg"/><TypographyAtom sx={{marginTop:1}} text="Pakistan"/>
<Avatar src="/bangladesh.png"/><TypographyAtom sx={{marginTop:1}} text="Bangladesh"/>

</BoxAtom>
</BoxAtom>
<BoxAtom>
<TypographyAtom text="Follow us"/>
<FacebookIcon sx={{color:"#0096FF",fontSize:40,marginRight:1,cursor:"pointer"}}/>
<XIcon sx={{color:"black",fontSize:35,marginRight:1,cursor:"pointer"}}/>
<InstagramIcon sx={{color:"#FF0000",fontSize:35,marginRight:1,cursor:"pointer"}}/>
<YouTubeIcon sx={{color:"#FF0000",fontSize:35,cursor:"pointer"}}/>
</BoxAtom>
<BoxAtom>
    <TypographyAtom text="Daraz 2025"/>
</BoxAtom>
</BoxAtom>
    );
}
export default FooterLast;