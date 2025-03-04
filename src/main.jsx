import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/containers.css";
import "./styles/globalClasses.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserContext";
import "./locales/i18n";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </AuthProvider>
  </StrictMode>
);
