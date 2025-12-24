import React, { useState } from "react";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import BoxAtom from "../atoms/BoxAtom";
import AppBarAtom from "../atoms/AppBarAtom";
import ToolbarAtom from "../atoms/ToolBarAtom";
function Header() {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.items.length);
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    if (searchText.trim() !== "") {
      navigate(`/search?query=${searchText}`);
    }
  };
  return (
    <AppBarAtom sx={{ backgroundColor: "#FF5F1F", height: 90, boxShadow: "none" }}>
      <ToolbarAtom sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <BoxAtom>
          <img src="/daraz-header.png" alt="Daraz" style={{ height: 40, marginTop: 8, marginLeft: 20 ,cursor:"pointer"}}  onClick={() => navigate("/")} />
        </BoxAtom>
        <BoxAtom sx={{ width: 700, mx: 2, marginTop: 2, textAlign: "center" }}>
          <TextField sx={{ backgroundColor: "white", borderRadius: 1 }} fullWidth size="large" placeholder="Search in Daraz" value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); 
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="inherit" onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),}}/>
        </BoxAtom>
        <BoxAtom sx={{ position: "relative", cursor: "pointer", marginRight: 3 }}
          onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ fontSize: 35, color: "white" }} />
          {cartCount > 0 && (
            <BoxAtom sx={{ position: "absolute",top: -5,right: -10,backgroundColor: "black",color: "white",width: 22,height: 22,fontSize: 12,borderRadius: "50%",
                    display: "flex",alignItems: "center",justifyContent: "center",fontWeight: "bold",}}>
              {cartCount}
            </BoxAtom>
          )}
        </BoxAtom>
      </ToolbarAtom>
    </AppBarAtom>
  );}
export default Header;
