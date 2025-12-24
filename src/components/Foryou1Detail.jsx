import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import Header from "../components/Header";
import axios from "axios";
// import { CircularProgress } from "@mui/material";

function Foryou1Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("Detail API Error:", err));
  }, [id]);
  const handleAdd = () => {
    const updatedProduct = {
      ...product,
      price: Number(product.price),
      quantity: 1,
    };
    dispatch(addToCart(updatedProduct));
    console.log("Added:", updatedProduct);
  };

  if (loading || !product) {
    return (
      <>
        <Header />
        {/* <TypographyAtom sx={{ fontSize: 25, fontWeight: 700, marginTop: 20, textAlign: "center" }} text="Loading Product..."/> */}
        {/* <CircularProgress  sx={{  marginTop: 40, textAlign: "center",color:"black",marginLeft:80 }} /> */}
      </>
    );
  }
  return (
    <>
      <Header />
      <BoxAtom
        sx={{p: 3,display: "flex",justifyContent: "space-between",marginTop: 10,marginLeft: 20,marginRight:20}}>
        <BoxAtom>
          <img src={product.images[0]} style={{ height: 300 }} />
          <TypographyAtom
            sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}
            text={product.title}/>
          <TypographyAtom
            sx={{ color: "#F85606", fontWeight: 700, fontSize: 22, mb: 2 }}
            text={`$${product.price}`}/>
        </BoxAtom>
        <BoxAtom sx={{ marginLeft: 20, marginTop: 10, width: 500 }}>
          <TypographyAtom sx={{ fontSize: 14, lineHeight: 1.5 }} text={product.description} />
          <ButtonAtom sx={{marginRight: 5,marginTop: 5,backgroundColor: "#FF5F1F",color: "white",border: "none",fontWeight: "bold",}}
            text="Add to Cart"
            onClick={handleAdd}/>
          <ButtonAtom sx={{marginTop: 5,backgroundColor: "#0096FF",color: "white",border: "none",fontWeight: "bold",}} text="Buy Now"/>
        </BoxAtom>
      </BoxAtom>
    </>
  );
}
export default Foryou1Detail;
