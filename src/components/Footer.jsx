import React from "react";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import Footerinfo from "./Footerinfo";
import FooterLast from "./FooterLast";
function Footer(){
    return(
<>
        <BoxAtom sx={{marginLeft:10,marginRight:10,height:300 ,marginTop:15 ,display:"flex",justifyContent:"space-between",}}> 
        <BoxAtom>
<TypographyAtom  text="Customer Care"/>
<TypographyAtom sx={{fontSize:13 ,cursor:"pointer"}} text="Help center"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="How to buy"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Corporate & Bulk purchasing"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Return and refund"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Daraz Shop"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Contact Us"/>
</BoxAtom>
<BoxAtom >
<TypographyAtom  text="Daraz"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="About US"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="How to buy"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Corporate & Bulk purchasing"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Return and refund"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Daraz Shop"/>
<TypographyAtom sx={{fontSize:13,cursor:"pointer"}} text="Contact Us"/>
</BoxAtom>
<BoxAtom sx={{marginRight:10}}>
  <img  src="/appstore.png" style={{cursor:"pointer"}}/>
  <img src="/googleplay.png" style={{cursor:"pointer"}}/><br/>
  <img src="/appgallery.png" style={{cursor:"pointer"}}/>
</BoxAtom>

      </BoxAtom>

<Footerinfo/>
<FooterLast/>
</>

    );
}
export default Footer;