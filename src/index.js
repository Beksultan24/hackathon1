import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./styles/Navbar.css";
import "./styles/MayBach.css";
import "./styles/Footer.css";
import "./styles/HomePage.css";
import "./styles/ProductCard.css";
import "./styles/Cart.css";
import "./styles/Amg.css";
import "./styles/Categories.css";
import "./styles/PayPage.css";
import "./styles/EditProduct.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
