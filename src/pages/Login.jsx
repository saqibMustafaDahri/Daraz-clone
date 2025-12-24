import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {TextField,Button,IconButton,InputAdornment,Paper,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    console.log("Response:", response.data);
    if (response.data.accessToken) {
      const expireTime = new Date(new Date().getTime() +  4 * 60 * 60 * 1000);
      Cookies.set("authToken", response.data.accessToken, { expires: expireTime });
      console.log("Token stored in cookie:", response.data.accessToken);
      window.location.href = "/";
    }
  };
  return (
    <BoxAtom sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: "center", mt: { xs: 10, md: 15 }, px: 2,}}>
      <Paper elevation={3}
        sx={{padding: 4,width: "100%",maxWidth: 400,borderRadius: 2,}}>
        <TypographyAtom sx={{fontSize:25 ,fontWeight:"bold",textAlign:"center",color:"#FF5F1F", marginBottom:3}} text="Login Form"/>
        <TypographyAtom fontWeight="bold" fontSize={18} mb={1} sx={{fontWeight:"bold",fontSize:18,marginBottom:1}} text="Username"/>
        <TextField fullWidth size="medium" placeholder="Enter your Username" value={username}
          onChange={(e) => setUserName(e.target.value)}
          sx={{ mb: 3 }}/>
         <TypographyAtom fontWeight="bold" fontSize={18} mb={1} sx={{fontWeight:"bold",fontSize:18,marginBottom:1}} text="Password"/>
        <TextField fullWidth type={showPassword ? "text" : "password"} placeholder="Enter your Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }} />
        <Button variant="contained" fullWidth
          sx={{ backgroundColor: "#FF5F1F", "&:hover": { backgroundColor: "#e6521a" }, mt: 1, p: 1, }}
          type="submit"
          onClick={handleSubmit} >
          Submit
        </Button>
      </Paper>
    </BoxAtom>
  );
}
export default Login;
