import React from "react";
import { Link } from "react-router-dom";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import CardAtom from "../atoms/CardAtom";
import CardMediaAtom from "../atoms/CardMediaAtom";
import CardContentAtom from "../atoms/CardContentAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import {sale} from "../data/item"
function SaleCard() {

  const ProductCard = ({ id, image, title, price }) => (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <CardAtom sx={{ width: 160, p: 1, cursor: "pointer"  ,   transition: "0.3s","&:hover": {boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",transform: "translateY(-3px)",borderRadius: "8px",
}, }}>
        <CardMediaAtom image={image} />
        <CardContentAtom>
          <TypographyAtom sx={{ fontSize: 14, color: "black" }} text={title} />
          <TypographyAtom sx={{ color: "#F85606", fontWeight: 600 }} text={price} />
        </CardContentAtom>
      </CardAtom>
    </Link>
  );
  return (
    <BoxAtom >
      <BoxAtom  sx={{ p: 2, borderBottom: "1px solid #eee", marginTop: 15,  }}>
        <TypographyAtom sx={{ fontSize: 25, fontWeight: 700 }} text="Flash Sale" />
          <BoxAtom sx={{display:"flex",justifyContent:"space-between",height:70,border: "2px solid #eee",backgroundColor:"white", width:1320}}>
            <TypographyAtom text="On Sale Now"sx={{color:"#FF5F1F",marginTop:2,fontSize:20,marginLeft:3}}/>
            <ButtonAtom text="Shop All Products" sx={{borderColor:"#FF5F1F",color:"#FF5F1F",height:40,marginTop:1,marginRight:3,fontWeight:"bold"}}/>
          </BoxAtom>
        <BoxAtom sx={{ display: "flex", justifyContent:"space-between", gap: 6, marginTop: 4,marginLeft:4,marginRight:4, }}>
          {sale.map((item) => (
            <ProductCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price}/>
          ))}
        </BoxAtom>
      </BoxAtom>
    </BoxAtom>
  );
}

export default SaleCard;

