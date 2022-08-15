import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";


function App() {
  return (
    <>
      <ProductContextProvider>
  <CartContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
