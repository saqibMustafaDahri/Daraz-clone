import React from "react";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import { Link } from "react-router-dom";
import {items} from "../data/item";
function Categories() {

  return (
    <BoxAtom >
      {/* sx={{ p: 2,borderTop: "2px solid #eee", borderBottom: "2px solid #eee", marginTop: 5 ,backgroundColor:"white",width:1320}}> */}
      <TypographyAtom sx={{fontSize:20,fontWeight:600, marginBottom:2,marginLeft:2}} text="Categories" />
      <BoxAtom sx={{  
        // display: "grid",  gridTemplateColumns: "repeat(7, 1fr)",  
          gap: 3,  mt: 2 , display:"flex", justifyContent:"space-between",width:1200,marginLeft:7}}>
        {items.map((item) => (
          <Link  key={item.id}  to={`/category/${item.id}`}  style={{ textDecoration: "none", color: "inherit" }}>
            <BoxAtom 
              sx={{  textAlign: "center", cursor: "pointer", transition: "0.3s",
                "&:hover": {boxShadow: "0px 4px 12px rgb(0,0,0,0.4)",transform: "translateY(-3px)",borderRadius: "8px",}, }} >
              <img  src={item.image} 
                style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 4 }} />
              <TypographyAtom sx={{fontSize:14,marginTop:1}} text={item.title} />
            </BoxAtom>
          </Link>
        ))}
      </BoxAtom>
    </BoxAtom>
  );
}

export default Categories;

