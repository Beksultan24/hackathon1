import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </>
  );
}

export default App;
