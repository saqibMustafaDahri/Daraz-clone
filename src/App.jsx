import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Foryou from "./components/Foryou";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import Foryou1Detail from "./components/Foryou1Detail";
import SaleCard from "./components/SaleCard";
import ElectronicsPage from "./pages/ElectronicsPage";
import FashionPage from "./pages/FashionPage";
import AppliancesPage from "./pages/AppliancesPage";
import MobilePage from "./pages/MobilePage";
import BeautyPage from "./pages/BeautyPage";
import HomePage from "./pages/HomePage";
import SportsPage from "./pages/SportsPage";
import KidsPage from "./pages/KidsPage";
import GroceriesPage from "./pages/GroceriesPage";
import ToysPage from "./pages/ToysPage";
import BagPage from "./pages/BagPage";
import ShoesPage from "./pages/ShoesPage";
import BooksPage from "./pages/BooksPage";
import CarsPage from "./pages/CarsPage";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <SaleCard />
                  <Categories />
                  <Foryou />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route path="/product/:id" element={<Foryou1Detail />} />
          <Route path="/category/1" element={<ElectronicsPage/>}/>
          <Route path="/category/2" element={<FashionPage/>}/>
          <Route path="/category/3" element={<MobilePage/>}/>
          <Route path="/category/4" element={<BeautyPage/>}/>
          <Route path="/category/5" element={<HomePage/>}/>
          <Route path="/category/6" element={<AppliancesPage/>}/>
          <Route path="/category/7" element={<SportsPage/>}/>
          <Route path="/category/8" element={<KidsPage/>}/>
          <Route path="/category/9" element={<GroceriesPage/>}/>
          <Route path="/category/10" element={<ToysPage/>}/>
          <Route path="/category/11" element={<BagPage/>}/>
          <Route path="/category/12" element={<ShoesPage/>}/>
          <Route path="/category/13" element={<BooksPage/>}/>
          <Route path="/category/14" element={<CarsPage/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;















































































































































































































































































// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
// import Header from "./components/Header";
// import Categories from "./components/Categories";
// import Foryou from "./components/Foryou";
// import Footer from "./components/Footer";
// import CartPage from "./pages/CartPage";
// import Foryou1Detail from "./components/Foryou1Detail";
// import SaleCard from "./components/SaleCard";
// import ElectronicsPage from "./pages/ElectronicsPage";
// import FashionPage from "./pages/FashionPage";
// import AppliancesPage from "./pages/AppliancesPage"
// import MobilePage from "./pages/MobilePage"
// import BeautyPage from "./pages/BeautyPage"
// import HomePage from "./pages/HomePage"
// import SportsPage from "./pages/SportsPage"
// import KidsPage from "./pages/KidsPage";
// import GroceriesPage from "./pages/GroceriesPage";
// import ToysPage from "./pages/ToysPage";
// import BagPage from "./pages/BagPage";
// import ShoesPage from "./pages/ShoesPage";
// import BooksPage from "./pages/BooksPage";
// import CarsPage from "./pages/CarsPage";
// import SearchResults from "./pages/SearchResults";


// function App() {

//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Header />
//               <SaleCard />
//               <Categories />
//               <Foryou />
//               <Footer />
//             </>
//           } />
//           <Route path="/product/:id" element={<Foryou1Detail />} />
//           <Route path="/category/1" element={<ElectronicsPage/>}/>
//           <Route path="/category/2" element={<FashionPage/>}/>
//           <Route path="/category/3" element={<MobilePage/>}/>
//           <Route path="/category/4" element={<BeautyPage/>}/>
//           <Route path="/category/5" element={<HomePage/>}/>
//           <Route path="/category/6" element={<AppliancesPage/>}/>
//           <Route path="/category/7" element={<SportsPage/>}/>
//           <Route path="/category/8" element={<KidsPage/>}/>
//           <Route path="/category/9" element={<GroceriesPage/>}/>
//           <Route path="/category/10" element={<ToysPage/>}/>
//           <Route path="/category/11" element={<BagPage/>}/>
//           <Route path="/category/12" element={<ShoesPage/>}/>
//           <Route path="/category/13" element={<BooksPage/>}/>
//           <Route path="/category/14" element={<CarsPage/>}/>
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/search" element={<SearchResults/>} />

//         </Routes>
//       </BrowserRouter>
//     </Provider> 
//   );
// }

// export default App;





























































































































































































































































































































































