import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import Header from "../components/Header";
import axios from "axios";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setAllProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log("Search API Error:", err));
  }, []);
  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(query)
  );

  return (
    <>
      <Header />
      <BoxAtom sx={{ padding: 4, marginTop: 10 }}>
        <TypographyAtom text={`Search Results for: "${query}"`}
          sx={{ fontSize: 22, fontWeight: "bold", mb: 3 }}/>
        {loading && (
          <TypographyAtom text="Loading products..." sx={{ fontSize: 20, color: "grey" }}/>
        )}
        {!loading && filtered.length === 0 && (
          <TypographyAtom text="No Products Found" sx={{ color: "grey", fontSize: 20, marginTop: 4 }}/>
        )}
        <BoxAtom sx={{display: "grid",gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",gap: 3,marginTop: 3,}}>
          {filtered.map((item) => (
            <BoxAtom key={item.id}
              sx={{padding: 2,background: "#fff",borderRadius: 2,boxShadow: "0 2px 5px rgba(0,0,0,0.1)",cursor: "pointer",transition: "0.3s","&:hover": { transform: "scale(1.05)" },}}
            >
              <img src={item.images} alt={item.title}
                style={{width: "100%",height: 150,objectFit: "cover",borderRadius: 4,}}/>
              <TypographyAtom text={item.title}sx={{ fontSize: 16, fontWeight: 600, marginTop: 1 }}/>
              <TypographyAtom text={`$${item.price}`} sx={{ color: "#FF5F1F", fontSize: 18, fontWeight: "bold" }}/>
            </BoxAtom>
          ))}
        </BoxAtom>
      </BoxAtom>
    </>
  );
}

export default SearchResults;
