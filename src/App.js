import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
