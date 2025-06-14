import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/authContext.jsx";
import { CardsProvider } from "./context/cardsContext.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <CardsProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CardsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
