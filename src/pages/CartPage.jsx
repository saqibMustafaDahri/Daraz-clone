import BoxAtom from "../atoms/BoxAtom";
import TypographyAtom from "../atoms/TypographyAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../features/cart/cartSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = items.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);
  return (
    <>
      <Header /> 
      <BoxAtom sx={{ display: "flex" }}>
        <BoxAtom sx={{ mt: 12, p: 3 }}>
          <TypographyAtom text="Your Cart" sx={{ fontSize: 30, mb: 3 }} />
          {items.length === 0 ? (
            <TypographyAtom text="Cart is Empty" />
          ) : (
            items.map((item) => (
              <BoxAtom
                key={item.id}
                sx={{ display: "flex", gap: 2, mb: 2, borderBottom: "1px solid #ddd", pb: 2 ,width:800 }}>
                <img src={item.images} style={{ width: 120 }} />
                <BoxAtom sx={{ flex: 1 }}>
                  <TypographyAtom text={item.title} sx={{ fontSize: 18 }} />
                  <TypographyAtom text={`$${item.price}`} sx={{ color: "#F85606", fontSize: 20 }} />
                  <BoxAtom sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                    <ButtonAtom sx={{ color: "black", fontSize: 20,backgroundColor:"#CCCCFF",border:"none"}} text="-"
                      onClick={() => dispatch(decrementQuantity(item.id))}/>
                    <TypographyAtom text={item.quantity} sx={{ px: 1, fontSize: 16 }} />
                    <ButtonAtom
                      sx={{ color: "black", fontSize: 20,backgroundColor:"#CCCCFF",border:"none" }} text="+"
                      onClick={() => dispatch(incrementQuantity(item.id))}/>
                    <DeleteIcon
                      onClick={() => dispatch(removeFromCart(item.id))}
                      sx={{ ml: 2, color: "#FF0000", fontSize: 35,cursor:"pointer" }} />
                  </BoxAtom>
                </BoxAtom>
              </BoxAtom>
            ))
          )}
        </BoxAtom>
        <BoxAtom sx={{marginLeft:110,marginTop: 24, marginRight: 15, width: 350, height: 350, border: "2px solid #353935", borderRadius: 2, padding: 3,position:"fixed"}}>
          <TypographyAtom text="Order Summary" sx={{ fontSize: 22, mb: 2,fontWeight:"bold" }} />
          <BoxAtom sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <TypographyAtom text="Subtotal" sx={{ fontSize: 18 }} />
            <TypographyAtom text={`$ ${subtotal}`} sx={{ fontSize: 18 }} />
          </BoxAtom>
          <BoxAtom sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            <TypographyAtom text="Shipping Fee" sx={{ fontSize: 18 }} />
            <TypographyAtom text="$ 0" sx={{ fontSize: 18 }} />
          </BoxAtom>
          <hr style={{ marginTop: 15 }} />
          <BoxAtom sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            <TypographyAtom text="Total" sx={{ fontSize: 20, fontWeight: "bold" }} />
            <TypographyAtom text={`$ ${subtotal}`} sx={{ fontSize: 20, fontWeight: "bold" }} />
          </BoxAtom>
          <BoxAtom>
            
            <ButtonAtom text="Proceed to checkout" sx={{marginTop:5 ,backgroundColor:"#FF5F1F",color:"white",border:"none",fontWeight:"bold",width:"100%",height:40 }}/>
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
      {/* <Footer/>  */}
    </>
  );
}
export default CartPage;
