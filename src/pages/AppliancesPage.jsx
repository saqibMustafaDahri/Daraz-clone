import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import CardAtom from "../atoms/CardAtom";
import CardMediaAtom from "../atoms/CardMediaAtom";
import CardContentAtom from "../atoms/CardContentAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import axios from "axios";
import Header from "../components/Header";

function AppliancesPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log("API Error:", err));
  }, []);
  const ProductCard = ({ id, images, title, price }) => (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <CardAtom
        sx={{width: 160,p: 1,cursor: "pointer",transition: "0.3s","&:hover": {boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",transform: "translateY(-3px)",borderRadius: "8px",},
        }}>
        <CardMediaAtom image={images[0]} />
        <CardContentAtom>
          <TypographyAtom sx={{ fontSize: 14, color: "black" }} text={title} />
          <TypographyAtom sx={{ color: "#F85606", fontWeight: 600 }} text={`$${price}`}/>
        </CardContentAtom>
      </CardAtom>
    </Link>
  );
  return (
    <BoxAtom>
      <Header/>
      <BoxAtom sx={{p: 2,borderTop: "2px solid #eee",borderBottom: "2px solid #eee",marginTop: 10,width: 1280,}}>
        <TypographyAtom sx={{ fontSize: 25, fontWeight: 700,marginLeft:7 }}text="Appliances"/>
        <BoxAtom sx={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4, marginLeft: 7, }}>
          {products.length === 0 ? (
            <TypographyAtom text="Loading products..." />
          ) : (
            products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                images={item.images}
                title={item.title}
                price={item.price} />
            ))
          )}
        </BoxAtom>
        <BoxAtom sx={{ display: "flex", justifyContent: "center" }}>
          <ButtonAtom sx={{ marginTop: 2, px: 10, color: "black", borderColor: "black" }} text="LOAD MORE"/>
        </BoxAtom>
      </BoxAtom>
    </BoxAtom>
  );
}

export default AppliancesPage;
